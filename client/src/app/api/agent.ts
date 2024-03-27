import axios, { AxiosError, AxiosResponse } from "axios";
import { router } from "../router/Routes";
import { toast } from "react-toastify";
import basketService from "./basketService";
import { Dispatch } from "redux";
import { Product } from "../models/product";
import { Basket } from "../models/basket";

axios.defaults.baseURL ='http://localhost:8081/api/';

const idle = () => new Promise(resolve => setTimeout(resolve, 100));
const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(async response=>{
    await idle();
    return response
}, (error: AxiosError)=>{
    const {status} = error.response as AxiosResponse; 
    switch(status){
        case 404:
            toast.error("Resource not found");
            router.navigate('/not-found');
            break;
        case 500:
            toast.error("Internal server error occurred");
            router.navigate('/server-error');
            break;
        default:
            break;
    }
    return Promise.reject(error.message);
})

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: object) => axios.post(url, body).then(responseBody),
    put: (url: string, body: object) =>axios.put(url, body).then(responseBody),
    delete: (url: string) =>axios.put(url).then(responseBody)
}

const Store = {
    apiUrl: 'http://localhost:8081/api/products',
    list:(page: number, size: number, brandId?: number, typeId?: number, url?: string)=> {
      let requestUrl = url || `products?page=${page-1}&size=${size}`;
      if(brandId!==undefined){
        requestUrl += `&brandId=${brandId}`;
      }
      if(typeId!==undefined){
        requestUrl += `&typeId=${typeId}`;
      }
      return requests.get(requestUrl);
    },
    details:(id: number) => requests.get(`products/${id}`),
    types: () => requests.get('products/types').then(types => [{ id: 0, name: 'All' }, ...types]),
    brands: () => requests.get('products/brands').then(brands => [{ id: 0, name: 'All' }, ...brands]),
    search: (keyword: string) => requests.get(`products?keyword=${keyword}`)
};

const Basket = {
    get: async() => {
        try{
            return await basketService.getBasket();
        }catch(error){
            console.error("Failed to get Basket: ", error);
            throw error;
        }
    },
    addItem: async(product: Product, dispatch: Dispatch)=>{
        try{
            const result = await basketService.addItemToBasket(product, 1, dispatch);
            console.log(result);
            return result;
        }catch(error){
            console.error("Failed to add new item to basket:", error);
            throw error;
        }
    },
    removeItem: async (itemId: number, dispatch: Dispatch)=>{
        try{
            await basketService.remove(itemId, dispatch);
        }catch(error){
            console.error("Failed to remove an item from basket:", error);
            throw error;
        }
    },
    incrementItemQuantity: async (itemId: number, quantity: number = 1, dispatch: Dispatch) => {
        try {
          await basketService.incrementItemQuantity(itemId, quantity, dispatch);
        } catch (error) {
          console.error("Failed to increment item quantity in basket:", error);
          throw error;
        }
      },
      decrementItemQuantity: async (itemId: number, quantity: number = 1, dispatch: Dispatch) => {
        try {
          await basketService.decrementItemQuantity(itemId, quantity, dispatch);
        } catch (error) {
          console.error("Failed to decrement item quantity in basket:", error);
          throw error;
        }
      },
      setBasket: async (basket: Basket, dispatch: Dispatch) => {
        try {
          await basketService.setBasket(basket, dispatch);
        } catch (error) {
          console.error("Failed to set basket:", error);
          throw error;
        }
      },
      deleteBasket: async(basketId: string) =>{
        try{
          await basketService.deleteBasket(basketId);
        } catch(error){
          console.log("Failed to delete the Basket");
          throw error;
        }
      }
}

const Account = {
  login: (values:any) =>requests.post('auth/login', values)
}


const agent = {
    Store,
    Basket,
    Account
}

export default agent;
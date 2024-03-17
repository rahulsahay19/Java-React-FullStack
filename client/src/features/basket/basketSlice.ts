import { createSlice } from "@reduxjs/toolkit";
import { Basket } from "../../app/models/basket";


interface BasketState {
    basket: Basket | null
}

const initialState: BasketState = {
    basket: null
}

export const basketSlice = createSlice({
    name:'basket',
    initialState, 
    reducers:{
        setBasket: (state, action) =>{
            console.log('new basket state', action.payload);
            state.basket = action.payload
        }
    }
})
export const {setBasket} = basketSlice.actions;
export interface Basket {
    id: string;
    items: BasketItem[];
}
export interface BasketItem {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    productBrand: string;
    productType: string;
    quantity: number;
}
export interface BasketTotals{
    shipping: number;
    subTotal: number;
    total: number;
}
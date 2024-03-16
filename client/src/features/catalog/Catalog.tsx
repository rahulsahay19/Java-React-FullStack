import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import agent from "../../app/api/agent";

export default function Catalog(){
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    agent.Store.list()
    .then((products)=>setProducts(products.content))
    .catch(error=>console.log(error))
    .finally(()=>setLoading(false));
  }, []);
  if(!products) return <h3>Unable to load Products</h3>
  return (
    <>
      <ProductList products={products}/>
    </>
  )
}
import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";

export default function Catalog(){
const [products, setProducts] = useState<Product[]>([]);
  useEffect(()=>{
    fetch('http://localhost:8081/api/products')
    .then(response =>response.json())
    .then(data=>setProducts(data.content));
  },[]);
  return (
    <ul>
      {products.map(product=>(
        <div key={product.id}>
          <p>Name: {product.name}</p>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Brand: {product.productBrand}</p>
          <p>Type: ${product.productType}</p>
        </div>
      ))}
      </ul>
  )
}
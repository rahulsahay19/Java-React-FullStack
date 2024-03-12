import { useState } from "react"

function App() {
  //Define a state variable products, using useState
  const [products, setProducts] = useState([
    {id: 1, name:'Product 1', price: 10},
    {id: 2, name:'Product 2', price: 20},
    {id: 3, name:'Product 3', price: 30}
  ]);
  return (
    <div>
      <h1>Sports Center</h1>
      {products.map(product=>(
        <div key={product.id}>
          <p>Name: {product.name}</p>
          <p>Name: ${product.price}</p>
        </div>
      ))}
      <button onClick={()=>{
        setProducts(prevProducts=>[
          ...prevProducts, {id:prevProducts.length+1, name:`Product ${prevProducts.length+1}`, price:Math.floor(Math.random()*100)+1}
        ]);
      }}>Add Product</button>
    </div>
  )
}

export default App

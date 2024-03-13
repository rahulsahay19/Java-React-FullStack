import { useEffect, useState } from "react"

function App() {
  //Define a state variable products, using useState
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    //Function to fetch the data
    const fetchData = async () =>{
      try{
        const response = await fetch('http://localhost:8081/api/products');
        if(!response.ok){
          throw new Error('Failed to fetch the data');
        }
        const data = await response.json();
        setProducts(data.content);
      }catch(error){
        console.error('Error Fetching Data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Sports Center</h1>
      {products.map(product=>(
        <div key={product.id}>
          <p>Name: {product.name}</p>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Brand: {product.brand}</p>
          <p>Type: ${product.type}</p>
        </div>
      ))}
      
    </div>
  )
}

export default App

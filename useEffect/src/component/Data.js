import { useEffect, useState,useCallback } from "react"

export const Data = () => {
    const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:8000/products");
    
    const fetchProducts = useCallback(async () => {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
  }, [url]);   

    useEffect(() => {
      fetchProducts();
    }, [fetchProducts]);
  
  return (
    
    <section>
       <div>
            <button onClick={() => setUrl("http://localhost:8080/products")}>All</button>
            <button onClick={() => setUrl("http://localhost:8080/products?in_stock=true")}>In Stock Only</button>
        </div>
        { products.map((product) => (
            <div  key={product.id}>
                <p >{product.id}</p>
                <p >{product.name}</p>
                <p >
                    <span>{product.price} zł</span>
                    <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}</span>
                </p>
                <hr/>
            </div>            
        )) }
    </section>
  )
}

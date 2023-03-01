import { useEffect, useState } from "react"

export const Data = () => {
    const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:8000/products");
    
    useEffect(() => {
        fetch("http://localhost:8080/products")
        .then(response => response.json())
        .then(data => setProducts(data));
    }, [url]);
    console.log(url,products);
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

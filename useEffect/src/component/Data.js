import { useEffect, useState } from "react"

export const Data = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:8080/products")
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);

  return (
    <section>
      
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

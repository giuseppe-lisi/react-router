import axios from "axios";
import { useEffect, useEffectEvent, useState } from "react";

function Products() {
    const [products, setProducts] = useState([]);

    function getProductData() {
        const apiUrl = "https://fakestoreapi.com/products";

        axios
            .get(apiUrl)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <>
            <h2>Questa è la pagina dei prodotti</h2>
            {products.map((product) => {
                return (
                    <>
                        <div className="productCard">
                            <img src={product.image} />
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                        </div>
                    </>
                );
            })}
        </>
    );
}

export default Products;

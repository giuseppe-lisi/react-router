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
            <div className="productContainer">
                {products.map((product) => {
                    return (
                        <>
                            <div className="productCard">
                                <div className="cardImg">
                                    <img src={product.image} />
                                </div>
                                <h3>{product.title}</h3>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default Products;

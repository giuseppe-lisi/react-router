import axios from "axios";
import { useEffect, useEffectEvent, useState } from "react";

function Products() {
    const [products, setProducts] = useState([]);

    function getProductData() {
        const apiUrl = "https://fakestoreapi.com/products/1";

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
        </>
    );
}

export default Products;

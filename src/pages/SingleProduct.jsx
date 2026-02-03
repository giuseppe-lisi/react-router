import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    function getProduct() {
        const apiUrl = "https://fakestoreapi.com/products";
        axios.get(`${apiUrl}/${id}`).then((res) => setProduct(res.data));
    }

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <>
            <div className="productCard">
                <div className="cardImg">
                    <img src={product.image} />
                </div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
        </>
    );
}

export default SingleProduct;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    function getProduct() {
        const apiUrl = "https://fakestoreapi.com/products";
        axios
            .get(`${apiUrl}/${id}`)
            .then((res) => {
                if (res.data) {
                    setProduct(res.data);
                } else {
                    navigate("/");               
                }
            })
            .catch((err) => console.log(`errore: ${err}`));
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

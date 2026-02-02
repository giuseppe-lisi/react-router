import { NavLink } from "react-router-dom";

function Products() {
    return (
        <>
            <div className="navbar">
                <h1>Store</h1>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Products">Prodotti</NavLink>
                    <NavLink to="/AboutUs">Info</NavLink>
                </nav>
            </div>
            <h2>Questa è la pagina dei prodotti</h2>
        </>
    );
}

export default Products;

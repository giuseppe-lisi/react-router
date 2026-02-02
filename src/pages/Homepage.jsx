import { NavLink } from "react-router-dom";

function Homepage() {
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
            <h2>Questa è la Homepage</h2>
        </>
    );
}

export default Homepage;
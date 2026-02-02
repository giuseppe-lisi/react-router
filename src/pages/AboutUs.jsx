import { NavLink } from "react-router-dom";

function AboutUs() {
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
            <h2>Quì trovi info su di noi</h2>
        </>
    );
}

export default AboutUs;

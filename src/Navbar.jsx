function Navbar() {
    return (
        <div className="navbar">
            <h1>Store</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Products">Prodotti</NavLink>
                <NavLink to="/AboutUs">Info</NavLink>
            </nav>
        </div>
    );
}

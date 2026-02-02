import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Homepage}>Homepage</Route>
                    <Route path="/Products" Component={Products}>Homepage</Route>
                    <Route path="/AboutUs" Component={AboutUs}>Homepage</Route>
                </Routes>
            </ BrowserRouter>

        </>
    );
}

export default App;

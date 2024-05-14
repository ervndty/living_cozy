import { Routes, Route } from "react-router-dom"

import NavbarComp from "./components/NavbarComp"
import FooterComp from "./components/FooterComp"

import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import PromoPage from "./pages/PromoPage"
import RoomsPage from "./pages/RoomsPage"


function App() {
    return <div>
    <NavbarComp />
    <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/product" Component={ProductsPage} />
        <Route path="/promo" Component={PromoPage} />
        <Route path="/rooms" Component={RoomsPage} />
    </Routes>

    <FooterComp />
    </div>
}

export default App

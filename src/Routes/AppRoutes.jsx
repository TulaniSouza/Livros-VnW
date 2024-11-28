import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "../Components/Inicio"
import Livros Doados from "../Components/LivrosDoados"
import Quero Doar from "../Components/QueroDoar"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="Livros Doados" element={<LivrosDoados />} />
                <Route path="Quero Doar" element={<QueroDoar />} />
            </Routes>
        </BrowserRouter>

    )
}
export default AppRoutes
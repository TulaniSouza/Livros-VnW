import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import React, { useState } from "react"
import Inicio from "../Pages/Inicio/Inicio"
import LivrosDoados from "../Pages/LivrosDoados/LivrosDoados"
import QueroDoar from "../Pages/QueroDoar/QueroDoar"
import logolivro from "../assets/logolivroAberto.png"
import lupa from "../assets/lupa.png"
import s from "./routes.module.scss"
import Bug from "../Pages/Error/Bug"

const AppRoutes = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => { setMenuOpen(!menuOpen); };
    const [valorBusca, setValorBusca] = useState("");


    return (
        <BrowserRouter>
            <section className={s.Container}>
                <section className={s.logo}>
                    <img src={logolivro} alt="logo de um livro aberto de acapa azul" />
                    <h1>Livros Vai na Web</h1>
                </section>
                <button
                    className={s.logoButton}
                    onClick={toggleMenu}
                    aria-expanded={menuOpen}
                    aria-label="Abrir menu de navegação"
                >
                    <img src={logolivro} alt="logo de um livro aberto de capa azul" />
                    <span>
                        <h1>Livros Vai na Web</h1>
                    </span>
                </button>
                <nav className={`${s.menu} ${menuOpen ? s.open : ''}`} role="navigation">
                    <ul >
                        <li><Link className={s.link} to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
                        <li><Link className={s.link} to="/LivrosDoados" onClick={() => setMenuOpen(false)}>Livros Doados</Link></li>
                        <li><Link className={s.link} to="QueroDoar" onClick={() => setMenuOpen(false)}>Quero Doar</Link></li>
                    </ul>
                </nav>

                <section className={s.barraDeBusca}>
                    <input type="search" name="search" id="search" placeholder="O que você procura?" onChange={(e) =>{setValorBusca(e.target.value)}}/>
                    <button><img src={lupa} alt="lupa" /></button>
                </section>

            </section>

            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/QueroDoar" element={<QueroDoar />} />
                <Route path="/LivrosDoados" element={<LivrosDoados valorBusca={valorBusca}/>} />
                <Route path="*" element={<Bug />} />
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes
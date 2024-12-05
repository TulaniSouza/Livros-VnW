import React from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Carousel } from 'react-responsive-carousel';
import despertar from "../../assets/Despertar.png"; 
import comida from "../../assets/Comida.png";
import python from "../../assets/Python.png";
import protagonista from "../../assets/Protagonista.png";
import s from "./livrosdoados.module.scss"


const LivrosDoados = () => {
    return (
        <Carousel className={s.container}
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showThumbs={false}
        >
            <figure className={s.boxImage}>
                <img src={despertar} alt="Livro o Despertar da Senhorita Prim, capa azul florida e um poltrona na capa" title="Livro o Despertar da Senhorita Prim"/>
                <figcaption className={s.legend}>O despertar da senhorita Prim - Natalia Sanmartin</figcaption>
            </figure>
            <figure className={s.boxImage}>
                <img src={comida} alt="Livro Comida & Cozinha- capa branca com talheres sendo uma colher com tempero natural" title="Livro Comida & Cozinha"/>
                <figcaption className={s.legend}>Comida & Cozinha - Harold McGee</figcaption>
            </figure>
            <figure className={s.boxImage}>
                <img src={python} alt="Livro Python sem mistérios - capa azul e o símbolo da linguagem" title="Livro Python sem mistérios"/>
                <figcaption className={s.legend}>Python sem Mistérios - Joel Saade</figcaption>
            </figure>
            <figure className={s.boxImage}>
                <img src={protagonista} alt="Protagonista - Capa avermelhada com o nome na diagonal com letra branca" title="Protagonista" />
                <figcaption className={s.legend}>O protagonista - Susane Andrade - Ficção</figcaption>
            </figure>
        </Carousel>
    );
};

const rootElement = document.querySelector('.LivrosDoados');
if (rootElement) {
    ReactDOM.render(<LivrosDoados />, rootElement);
} else {
    console.error("Elemento '.LivrosDoados' não encontrado no DOM");
}

export default LivrosDoados;

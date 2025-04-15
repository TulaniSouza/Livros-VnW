import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import s from "./livrosdoados.module.scss"
import axios from "axios"
import PropTypes from 'prop-types';

const LivrosDoados = ({ valorBusca = "" }) => {

    const [livros, setLivros] = useState([])
    const puxarLivros = async () => {
        const resposta = await axios.get('https://api-livros-1jof.onrender.com/livros')
        setLivros(resposta.data)
    }
    useEffect(() => {
        puxarLivros();
    }, []);

    const livrosFiltrados = livros.filter((item) =>{const tituloRenderizado = item.titulo.toLowerCase();
        const buscaRenderizada = valorBusca.toLowerCase() ;
        return tituloRenderizado.includes(buscaRenderizada);
    });

    return (
        <Carousel className={s.container}
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showThumbs={false}
        >
                {livrosFiltrados.map((item)=>(
                    <section className={s.boxImage} key={item.id}>
                        <section>
                            <img src={item.image_url} alt={`Titulo do livro ${item.titulo}`} />
                            <section className={s.Legend}>
                                <h3>{item.titulo}</h3>
                                <p>{item.autor}</p>
                                <p>{item.categoria}</p>
                            </section>
                        </section>
                    </section>
                    ))
                }
        </Carousel>
    );
};

const rootElement = document.querySelector('.LivrosDoados');
if (rootElement) {
    ReactDOM.render(<LivrosDoados />, rootElement);
} else {
    console.error("Elemento '.LivrosDoados' não encontrado no DOM");
}
LivrosDoados.propTypes ={
    valorBusca: PropTypes.string.isRequired
};
export default LivrosDoados;

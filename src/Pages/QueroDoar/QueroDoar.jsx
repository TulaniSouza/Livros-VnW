import livropDoar from "../../assets/livropDoar.png"
import s from "./querodoar.module.scss"
import { useState,useEffect } from "react"
import axios from "axios"

const QueroDoar = () => {

    const [titulo, setTitulo]= useState("")
    const [categoria, setCategoria]= useState("")
    const [autor, setAutor]= useState("")
    const [image_url, setImage_url]= useState("")

    const capturaTitulo= (e)=>{
        setTitulo(e.target.value)
    }
    const capturaCategoria= (e)=>{
        setCategoria(e.target.value)
    }
    const capturaAutor= (e)=>{
        setAutor(e.target.value)
    }
    const capturaImage_Url= (e)=>{
        setImage_url(e.target.value)
    }

    const enviarDados = async() =>{
        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
        await axios.post("https://api-livros-1jof.onrender.com/doar",dadosEnviar)
    }

    const puxarLivros = async () => {
        const resposta = await axios.get('https://api-livros-1jof.onrender.com/livros')
        setLivros(resposta.data)
    }
    useEffect(()=>{
        puxarLivros()
    },[])

    return (
        <section className={s.container}>
            <p>
                Por favor, preencha o formulário com suas informações e as informações do Livro
            </p>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div>
                    <img src={livropDoar} alt="livro aberto com borda azul" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" placeholder="Título" onChange={capturaTitulo} required />
                <input type="text" placeholder="Categoria" onChange={capturaCategoria} required/>
                <input type="text" placeholder="Autor" onChange={capturaAutor} required/>
                <input type="text" placeholder="Link da Imagem" onChange={capturaImage_Url} required/>
                <input type="submit" className={s.button} value="Doar" onClick={enviarDados} />
            </form>
        </section>
    )
}

export default QueroDoar
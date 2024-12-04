import livropDoar from "../../assets/livropDoar.png"
import s from "./querodoar.module.scss"


const QueroDoar = () => {
    return (
        <section className={s.titulo}>
            <p>
                Por favor, preencha o formulário com suas informações e as informações do Livro
            </p>
            <form action="">
                <div>
                    <img src={livropDoar} alt="livro aberto com borda azul" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" name="" id="" placeholder="Título" />
                <input type="text" name="" id="" placeholder="Categoria" />
                <input type="text" name="" id="" placeholder="Autor" />
                <input type="text" name="" id="" placeholder="Link da Imagem" />
                <input type="submit" className={s.button} value="Doar" />
            </form>
        </section>

    )

}

export default QueroDoar
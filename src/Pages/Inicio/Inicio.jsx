import s from "./inicio.module.scss";
import comunidade from "../../assets/comunidade.png";
import leitor from "../../assets/leitor.png";
import igualdade from "../../assets/igualdade.png";
import balanca from "../../assets/balanca.png";



const Inicio = () => {
    return (
        <main>
            <section className={s.boxOne}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO </h2>
            </section>

            <section className={s.boxTwo}>
                <h2>Por que devo doar?</h2>
                <section>
                    <figure>
                        <img src={comunidade} alt="quatro bonecos interligadors" />
                        <figcaption> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</figcaption>
                    </figure>
                    <figure>
                        <img src={leitor} alt="um boneco lendo um livro" />
                        <figcaption>
                            Estimula o hábito da leitura e o aprendizado contínuo.
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={igualdade} alt="grupo de seis pessoas expressando seus conheicmentos" />
                        <figcaption>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</figcaption>
                    </figure>
                    <figure>
                        <img src={balanca} alt="balança da justiça" />
                        <figcaption>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</figcaption>
                    </figure>
                </section>
            </section>
        </main>
    );
}
export default Inicio
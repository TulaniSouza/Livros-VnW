import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import twitter from "../../assets/Twitter.png"
import youtube from "../../assets/youtube.png"
import s from "./footer.module.scss"


const Footer = () => {
    return (
        <footer>
            <section className={s.contatos}>
                <h3>4002-8922</h3>
                <section>
                    <img src={facebook} alt="ícone do facebook" />
                    <img src={instagram} alt="ícone do instagram" />
                    <img src={linkedin} alt="ícone do linkedin" />
                    <img src={twitter} alt="ícone do twitter" />
                    <img src={youtube} alt="ícone do youtube" />
                </section>
            </section>
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>

    )

}
export default Footer
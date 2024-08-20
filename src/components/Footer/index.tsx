//estilos
import { StyledFooter } from "./styles"
// imagens
import logo from "../../assets/logo.png"
//ícones
import { FaWhatsapp } from "react-icons/fa6"
import { MdOutlineMailOutline } from "react-icons/md"

const Footer = () => {

    return (
        <StyledFooter>
            <div className="container footer">
                <div className="footer-links">
                   <div>
                        <img  src={logo}/>
                        <p>&copy; 2024 - Desenvolvido por Anna Claudia Barros</p>
                   </div>
                    <div>
                        <p>
                            <a href="https://www.linkedin.com/in/anna-claudia-barros-silveira/">Linkedin</a>
                        </p>
                        <p>
                            <a href="#">Repositório</a>
                        </p>
                    </div>
                </div>
                <div>
                    <h1>Entre em contato:</h1>
                    <div>
                        <h2> <FaWhatsapp /> Whatsapp</h2>
                        <p>+55 1234-5678</p>
                        <p>Os atendimentos são realizados de segunda a sexta, das 09:00 às 18:00, exceto feriados.</p>
                    </div>
                    <div>
                        <h2> <MdOutlineMailOutline /> E-mail</h2>
                        <p>ajuda@sextoandar.com.br</p>
                        <p>Atendimento a clientes e dúvidas em geral. Respostas em até um dia útil.</p>
                    </div>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer
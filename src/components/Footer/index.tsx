import { StyledFooter } from "./styles"
import { LuExternalLink } from "react-icons/lu";

const Footer = () => {

    return (
        <StyledFooter>
            <p>&copy; 2024 - Desenvolvido por Anna Claudia Barros</p>
            <ul>
                <li>
                    <a target="blank" href="https://www.linkedin.com/in/anna-claudia-barros-silveira/">
                      Linkedin <LuExternalLink />
                    </a>
                </li>
                <li>
                   <a target="blank" href="https://github.com/annacbsdev">
                     GitHub <LuExternalLink />
                   </a>
                </li>
            </ul>
        </StyledFooter>
    )
}

export default Footer
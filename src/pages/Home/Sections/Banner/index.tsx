//router
import { Link } from 'react-router-dom';
//imagens
import casal from '../../../../assets/casal.png'
//botão
import Button from '../../../../components/UI/Button'
//ícones
import { StyledBanner } from './styles'
import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
    return (
        <StyledBanner className='container'>
            <div>
                <h2>
                Encontre o lar perfeito com <span>facilidade!</span>
                </h2>
                <p>
                Transforme seu sonho em realidade – encontre o lar perfeito que combina conforto, estilo e localização ideal, tudo ao alcance de um clique.
                </p>
                <Link to="/properties">
                    <Button variant='secondary'>VER IMÓVEIS DISPONÍVEIS <IoIosArrowForward /></Button>
                </Link>
            </div>
            <img src={casal}/>
        </StyledBanner>
    )
}

export default Banner
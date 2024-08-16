import { Link } from 'react-router-dom';
import casal from '../../assets/casal.png'
import Button from '../../components/UI/Button'
import { StyledHome } from './styles'
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
    return (
        <StyledHome>
            <img src={casal}/>
            <div>
                <hr />
                <h2>
                Encontre o lar perfeito com facilidade!
                </h2>
                <Link to="/properties">
                    <Button variant='secondary'>VER IMÓVEIS DISPONÍVEIS <IoIosArrowForward /></Button>
                </Link>
            </div>
        </StyledHome>
    )
}

export default Home
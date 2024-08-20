import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Button from '../UI/Button'
import * as S from './styles'

const Header = () => {
    return (
        <S.StyledHeader>
                <Link to="/">
                    <img src={logo} alt="Logo da empresa"/>
                </Link>
                <nav>
                <Link to="/">
                    <Button variant='text'>Início</Button>
                </Link>
                    <Button variant='text'>Ajuda</Button>
                <Link to="/properties">
                    <Button>Encontrar imóveis</Button>
                </Link>
                </nav>
        </S.StyledHeader>
    )
}

export default Header
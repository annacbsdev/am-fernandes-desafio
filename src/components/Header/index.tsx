import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Button from '../UI/Button'
import * as S from './styles'

const Header = () => {
    return (
        <S.StyledHeader>
                <Link to="/">
                    <img src={logo} alt="ícone de prédio"/>
                </Link>
                <nav>
                <Link to="/properties">
                    <Button variant='text'>Imóveis</Button>
                </Link>
                    <Button variant='text'>Ajuda</Button>
                    <Button>Entrar</Button>
                </nav>
        </S.StyledHeader>
    )
}

export default Header
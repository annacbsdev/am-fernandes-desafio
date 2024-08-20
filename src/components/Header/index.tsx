//router e useState
import { Link } from 'react-router-dom'
import { useState } from 'react'
//ícones
import { RxHamburgerMenu } from 'react-icons/rx'
//imagens
import logo from '../../assets/logo.png'
//botão e estilos
import Button from '../UI/Button'
import {StyledHeader} from './styles'

const Header = () => {

    //menu hambúrguer
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <StyledHeader isMenuOpen={isMenuOpen} className='container'>
                <Link to="/">
                    <img src={logo} alt="Logo da empresa"/>
                </Link>
                <RxHamburgerMenu className="icon hamburger-icon" onClick={toggleMenu} />
                <nav>
                <Link to="/">
                    <Button variant='text'>Início</Button>
                </Link>
                    <Button variant='text'>Ajuda</Button>
                <Link to="/properties">
                    <Button>Encontrar imóveis</Button>
                </Link>
                </nav>
        </StyledHeader>
    )
}

export default Header
import styled from "styled-components";
import { colors } from "../../styles";

export const StyledHeader = styled.header<{ isMenuOpen?: boolean }>`
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        gap: 24px;
    }

    .hamburger-icon {
        display: none;
    }

    @media (max-width: 1024px){
        padding: 8px 24px;
        nav {
            gap: 16px
        }
    }

    @media (max-width: 767px){
        
        .hamburger-icon {
            display: block;
            font-size: 32px;
        }

        nav {
            display: ${props => (props.isMenuOpen ? "flex" : "none")};
            position: absolute;
            background-color: ${colors.lightGrey};
            top: 40px;
            right: 0;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid black;
            padding: 16px;
        }
    }
`
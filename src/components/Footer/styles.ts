import styled from "styled-components"
import { colors } from "../../styles"

export const StyledFooter = styled.footer`
    background-color: ${colors.grey};
    padding: 40px;
    
    .footer {
        display: flex;
        justify-content: space-between;
        
    }

    .footer-links {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        a {
            text-decoration: underline;
            color: black
        }


    }

    h1 {
        font-size: 24px;
        font-weight: 500;
    }

    h2 {
        font-size: 16px;
        font-weight: normal;
        display: flex;
        align-items: center;
        margin-top: 16px;
    }
`
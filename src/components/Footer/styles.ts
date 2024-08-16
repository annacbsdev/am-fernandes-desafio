import styled from "styled-components"
import { colors } from "../../styles"

export const StyledFooter = styled.footer`
    background-color: ${colors.lightGreen};
    display: flex;
    padding: 40px;
    justify-content: space-between;
    color: ${colors.brown};
    ul {
        display: flex;
        gap: 16px; 

        a {
            text-decoration: none;
            color: ${colors.brown};
        }
    }
`
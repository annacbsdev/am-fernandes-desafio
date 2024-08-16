import styled from "styled-components";
import { colors } from "../../styles";


export const StyledPropertyCard = styled.div`
    display: flex;
    border: 1px solid black;
    gap: 16px;

    img {
        width: 250px;
        height: 250px;
        object-fit: cover;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 24px 8px;
    
        h2{
            font-weight: bold;
            color: ${colors.brown};
            font-size: 18px;
        }

        h1 {
            color: black;  
            font-size: 24px;
        }

        p {
            font-size: 16px;
        }

        span {
            font-size: 14px;
        }
    }

`
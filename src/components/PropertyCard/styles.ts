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
            color: ${colors.blue};
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

    @media (max-width: 1024px){
        width: 80%;
    }

    @media (max-width: 767px) {
        flex-direction: column;
        gap: 0;

        div {
            padding: 8px;
        }
        img{
            width: 100%;
        }
    }
`
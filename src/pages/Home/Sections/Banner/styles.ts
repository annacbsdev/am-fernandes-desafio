import styled from "styled-components";
import { colors } from "../../../../styles";

export const StyledBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    img {
        margin-top: 40px;
        height: 80vh;
        width: 40vw;
        object-fit: cover;
        border-top-right-radius: 40px;
        border-top-left-radius: 40px;
    }

    div {
        width: 450px;
    }

    h2 {
        font-size: 40px;
        font-weight: 500;
        span {
            color: ${colors.blue}
        }
    }

    p {
        margin: 24px 0 40px;
    }

    button {
        display: flex;
        align-items: center;
        gap: 8px
    }

    @media (max-width:1024px){
        flex-direction: column-reverse;
        align-items: flex-start;
        img {
            width: 100%;
            height: 40vh;
            border-top-right-radius: 0;
            border-top-left-radius: 0;
            margin-top: 0;
        }
        div {
            width: 90%;
            padding: 24px 16px;

            h2{
                font-size: 32px;
            }

            p{
                font-size: 14px;
            }
        }
    }
`
import styled from "styled-components";
import { colors } from "../../styles";

export const StyledPropertyPage = styled.section`

    margin-bottom: 80px;

    .main {
        display: flex;
        align-items: center;
    
        .back {
            display: flex;
            align-items: center;
            color: black
    
        }
    
        .fachada {
            height: 80vh;
            width: 40vw;
            object-fit: cover;
            border-top-right-radius: 40px;
            border-bottom-right-radius: 40px;
        }
    
        .property-infos{
            padding: 40px;

            .back-button {
                padding: 0;
            }

            h1 {
                font-size: 48px;
                font-weight: 500;
                margin: 16px 0;
            }
    
            h2 {
                font-size: 20px;
                font-weight: normal;
            }
    
            .price {
                background-color: ${colors.lightBlue};
                padding: 24px;
                display: inline-block;
                margin: 48px 0;
                h2{
                    font-size: 48px;
                    font-weight: 500;
                }
                span {
                    font-size: 20px;
                }
            }
        }
    
        
    }
    
    .address-container{
        
        h1 {
            font-size: 24px;
            color: ${colors.blue};
            font-weight: normal;
            
            margin: 32px 0;
        }

        img {
            margin: 24px 0;
        }

        span {
            text-decoration: underline;
        }
    }
`


export const InfoList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 40px 0 64px 0;

    li {
        display: flex;
        align-items: center;
        gap: 8px
    }
`
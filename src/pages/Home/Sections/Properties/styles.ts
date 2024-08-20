import { colors } from './../../../../styles';
import styled from "styled-components";

export const StyledProperties = styled.section`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > h1 {
        font-size: 40px;
        font-weight: 500;
        text-align: center;
        margin-bottom: 40px;
        margin-top: 80px;

        span {
            color: ${colors.blue}
        }
    }

    button{
        margin-bottom: 80px;
    }

    ul {
        display: flex;
        gap: 80px;
        margin-bottom: 40px;

        li{
            position: relative;
            .infos {
                background-color: ${colors.lightBlue};
                position: absolute;
                bottom: 24px;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 16px;
                color: black;

                h1{
                    font-weight: 500;
                    margin-bottom: 8px;
                }
                p, span {
                    font-size: 14px;
                }
            }

            img {
                width: 350px;
                height: 450px;
                object-fit: cover;
            }
        }
    }

    @media (max-width: 1024px) {

        > h1{
            font-size: 32px;
        }
        ul {
            flex-wrap: wrap;
            justify-content: center;
            gap: 24px;
           li {
            img {
                height: 400px;
            }
           }
        }
    }

`
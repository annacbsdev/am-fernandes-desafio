import styled from "styled-components";
import { colors } from "../../../../styles";

export const StyledServices = styled.div`
    background-color: ${colors.lightBlue};
    padding: 64px 0;

    h1 {
        font-size: 40px;
        font-weight: 500;
        margin-bottom: 40px;
    }

    ul {
        display: flex;
        justify-content: space-between;

        li {
            border: 1px solid black;
            padding: 32px 32px 40px;
            width: 28%;
            position: relative;

            h2{
                text-transform: uppercase;
                font-weight: bold;
                font-size: 24px;
                margin-bottom: 16px;
            }

            span {
                position: absolute;
                top: 32px;
                right: 32px;
                font-size: 32px;
            }
        }
    }
`
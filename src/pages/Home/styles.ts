import styled from "styled-components";
import { colors } from "../../styles";

export const StyledHome = styled.div`
    display: flex;
    align-items: center;
    gap: 64px;

    img {
        width: 40vw;
        object-fit: cover;
    }

    hr {
        width: 120px;
        height: 5px;
        background-color: ${colors.brown}
    }

    h2 {
        font-size: 64px;
        color: ${colors.brown};
        font-weight: normal;
        margin: 64px 0;
        width: 640px;
    }

    button {
        display: flex;
        align-items: center;
        gap: 8px
    }
`
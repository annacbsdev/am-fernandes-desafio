import styled from "styled-components";
import { colors } from "../../../../styles";

export const StyledBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;

    img {
        height: 60vh;
        object-fit: cover;
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
`
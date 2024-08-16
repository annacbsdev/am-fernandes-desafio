import styled from "styled-components";
import { colors } from "../../styles";

export const StyledPropertyPage = styled.section`
    display: flex;
    align-items: center;

    .fachada {
        height: 90vh;
        width: 40vw;
        object-fit: cover;
    }

    .property-infos{
        padding: 40px;

        h1 {
            font-size: 40px;
            color: ${colors.brown};
            margin-bottom: 48px;
        }

        h2 {
            font-size: 64px;
            font-weight: normal;
            margin-bottom: 64px;
        }
    }

    .address {
        margin: 40px 0 64px 0;
    }

`

export const Title = styled.div`

    hr {
        height: 3px;
        width: 52px;
        background-color: ${colors.brown};
    }

    h3 {
        font-size: 20px;
        font-weight: 500;
        color: ${colors.brown};
        margin-top: 4px;
}
`

export const InfoList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0 64px 0;

    li {
        display: flex;
        align-items: center;
        gap: 8px
    }
`
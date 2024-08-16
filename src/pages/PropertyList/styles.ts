import styled from "styled-components";
import { colors } from "../../styles";

export const StyledPropertyList = styled.section`
    margin: 40px auto;


    h1{
        color: ${colors.brown};
        font-weight: normal;
        font-size: 32px;
        margin-bottom: 24px;
    }



    button {
        display: flex;
        align-items: center;
        padding: 8px;
        gap: 8px;
    }
`

export const SearchFields = styled.div`
    display: flex;
    gap: 64px;
    margin-bottom: 40px;

    div {
        display: flex;
        align-items: center;
        gap: 16px;
        h2 {
            font-size: 18px;
            font-weight: normal;
        }
        
    }
    
`

export const PropertiesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px
`
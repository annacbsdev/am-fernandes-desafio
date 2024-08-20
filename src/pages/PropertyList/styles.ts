import styled from "styled-components";
import { colors } from "../../styles";


export const StyledPropertyList = styled.section`
    padding-top: 40px;
    min-height: 90vh;

    .square {
        background-color: ${colors.lightBlue};
        display: block;
        width: 24px;
        height: 30px;
        margin-bottom: 24px;
    }

    h1{
        
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

    @media (max-width: 1024px){
        padding-left: 24px;
    }

    @media (max-width: 767px) {
        h1{
            font-size: 24px;
        }   
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
    @media (max-width: 1024px){
        flex-direction: column;
        gap: 16px;
    }
    
    @media (max-width: 767px) {
      .search{
        flex-direction: column;
        align-items: flex-start;
      }   
      button{
        padding: 4px;
        font-size: 14px;
      }
    }
`

export const PropertiesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 40px;

    @media (max-width: 1024px){
        display: flex;
        flex-direction: column;
    }

    
`
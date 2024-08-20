import styled from "styled-components";

export const StyledSelect = styled.select`
    border: 1px solid black;
    padding: 8px;
    font-size: 18px;
    background-color: transparent;

    @media (max-width: 767px) {
        padding: 4px;
        width: 30%;
        font-size: 14px;
    }
`
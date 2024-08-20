import styled from "styled-components";

export const StyledTextField = styled.input`
    border: 1px solid black;
    padding: 8px;
    width: 400px;
    font-size: 18px;
    background-color: transparent;

    &::placeholder {
        color: #B1B1B1
    }

    @media (max-width: 767px) {
        padding: 4px;
        width: 80%;
        font-size: 14px;
    }
`
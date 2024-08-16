import { createGlobalStyle } from 'styled-components'

export const colors = {
  brown: '#735E59',
  hoverBrown: '#56433E',
  lightGreen: '#ECEADA',
  grey: '#848484'
}

const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    list-style: none;
    text-decoration: none;
  }

  .container {
    max-width: 1400px;
    width: 100%;

  }

`

export default GlobalCss

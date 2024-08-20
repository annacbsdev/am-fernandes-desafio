import { createGlobalStyle } from 'styled-components'

export const colors = {
  lightBlue: '#85BCCA',
  blue: '#134B70',
  hoverBlue: '#08324E',
  grey: '#A9A9A9',
  lightGrey: '#EEEEEE'
}

const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${colors.lightGrey};
  }

  .container {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1400px) {
        width: 90%;
    }

    @media (max-width: 1024px) {
        width: 100%;
    }
  }

`

export default GlobalCss

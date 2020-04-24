import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    :root {
        --color-white: #ffffff;
        --color-black: #2d2f37;
        --color-yellow: #f5bf00;
        --color-red: #ec1c24;
        --color-green: #05ac80;
        --color-blue: #3c70b4;
    }
  * {
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }
  html,
  body {
    min-height: 100%;
    min-width: 320px;
    padding: 0;
    margin: 0;
  }
  strong {
    font-weight: 500;
  }
  a {
    text-decoration: none;
    color: #ff9801;
    &:hover {
      text-decoration: underline;
    }
  }
`

export default GlobalStyles

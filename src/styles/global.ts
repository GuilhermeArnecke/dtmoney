import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933FF;

    --text-tittle: #363F5F;
    --text-body: #969CB3;

    --background: #F0F2F5;
    --shape: #FFFFFF
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop)
  // 1 REM = 16PX
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    // 1REM = 15PX

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
    // 1REM = 14PX
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
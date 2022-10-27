import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --fg: #000;
    --bg: #fff;
    --accent-color: #FF4D4D;
  }

  [data-theme="dark"] {
    --fg: #fff;
    --bg: #000;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,Loto,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    text-rendering: optimizelegibility;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;

    color: var(--fg);
    background-color: var(--bg);
  }
`

export default GlobalStyle

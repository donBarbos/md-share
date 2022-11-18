import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --fg: #000;
    --bg: #fff;
    --accent-color: #FF4D4D;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --fg: #fff;
      --bg: #000;
      --accent-color: #FF4D4D;
    }

    [data-theme="light"] {
      --fg: #000;
      --bg: #fff;
    }
  }

  [data-theme="dark"] {
    --fg: #fff;
    --bg: #000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu",
      Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 16px;
    font-weight: 500;

    text-align: center;
    text-rendering: optimizelegibility;

    height: 100%;
    width: 100%;

    color: var(--fg);
    background-color: var(--bg);

    /* for a smooth theme change */
    transition: color 0.1s, background 0.1s;
  }
`

export default GlobalStyle

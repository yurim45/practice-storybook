import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Pretendard";
    font-size: 12px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol, ul, li {
    list-style: none;
  }
  
  a {
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: inherit;
      text-decoration: inherit;
    }
  }

  input,
  select,
  button {
    -webkit-appearance: none;
    background: none;
    border: none;
    font-size: inherit;
    color: inherit;
    &:focus {
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }

  a, button {
    cursor: pointer;
  }

  button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  }

  pre {
    white-space: pre-line;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  :root {
    --primary: #00C092;
    --black: #000000;
    --darkgrey: #757575;
    --grey: #b7b7b7;
    --line: #e5e5e5;
    --white: #ffffff;

    --txt333: #333333;
    --txt555: #555555;
    --txt777: #777777;
    --txt999: #999999;
    --txtGreen: #00B98D;
    --txtRed: #F85151;
    --txtBlue: #0085FF;
    --txtDim: #A5A5A5
  }
`;

export default GlobalStyle;

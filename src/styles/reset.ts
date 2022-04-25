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

  pre {
    white-space: pre-line;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* input[type='radio'] {
			appearance:none;
			width:24px;
			height:24px;
			border-radius:50%;
			background:#ffffff;
		}
		input[type='radio']:before {
			content:'';
			display:block;
			width:70%;
			height:70%;
			margin: 15% auto;
			border-radius:50%;  
      background:#C5C5C5;
		}
		input[type='radio']:checked:before {
     	width:12px;
			height:12px;
      border:1.5px solid #00C092;
			background:#00C092;
		} */
`;

export default GlobalStyle;

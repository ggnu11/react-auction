import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
 ${reset};
*{ 
 box-sizing: border-box;
 font-family: 'Noto Sans KR' !important ; 
 font-size: 16px;
}
html {
font-size: 62.5%;
height:100%;
overflow: hidden;
}
body {
font-size: 1.6rem;
height:100%;
}
`;

export default GlobalStyle;

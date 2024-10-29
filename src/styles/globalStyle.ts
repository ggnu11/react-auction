import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
 ${reset};
*{ 
 box-sizing: border-box;
 font-family: 'Noto Sans KR' !important ; 
 font-size: 16px;
}
`;

export default GlobalStyle;

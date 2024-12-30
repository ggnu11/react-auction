import { Helmet } from 'react-helmet-async';
import './assets/css/fonts.css';
import MenuRoute from './routes/MenuRoute';
import GlobalStyle from './styles/globalStyle';

function App() {
  const siteName = process.env.REACT_APP_NAME as string;
  const title = siteName.toUpperCase();

  return (
    <>
      <Helmet>
        <title>{`${title}`}</title>
        <link id="favicon" rel="icon" href="/favicon.svg" type="image/x-icon" />
      </Helmet>
      <GlobalStyle />
      <MenuRoute />
    </>
  );
}

export default App;

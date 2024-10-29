import { Helmet } from 'react-helmet-async';
import './assets/css/fonts.css';
import MenuRoute from './routes/MenuRoute';
import GlobalStyle from './styles/globalStyle';

function App() {
  const siteName = process.env.REACT_APP_NAME;

  return (
    <>
      <Helmet>
        <title>{`${siteName}`}</title>
      </Helmet>
      <GlobalStyle />
      <MenuRoute />
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import App from './App';
import './Locales/i18n';
import './assets/css/tailwind.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      notifyOnChangeProps: 'tracked',
    },
  },
});
window.onload = () => {
  console.log('language :: ', window.navigator.language);
  render();
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

function render() {
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <App />
          </RecoilRoot>
        </QueryClientProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
}

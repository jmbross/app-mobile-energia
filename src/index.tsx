import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { theme, GlobalStyles } from '@/assets/styles';
import '@/assets/locales/i18n';
import { store, persistor } from '@/constants/configureStore';
import ErrorScreen from '@/screens/Error/ErrorScreen';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary FallbackComponent={ErrorScreen}>
          <BrowserRouter>
            <GlobalStyles />
            <App />
          </BrowserRouter>
        </ErrorBoundary>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

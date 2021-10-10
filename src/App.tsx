import React from 'react';
import {ThemeProvider} from 'styled-components';
import {LandingPage} from './Pages';
import {DefaultThemeI} from './Utils/models';
import {Global} from './Components';
import {Provider} from 'react-redux';
import Store from './Utils/redux/store';

const lightTheme: DefaultThemeI = {
  primaryColor: '#FA9D1E',
  secondaryColor: '#E5E5E5',
  rmbBlack: '#0A0A0D',
  fontColor: '#242633',
  whiteColor: '#FFFFFF',
  greyColor: '#f2f2f2',
};

function App() {
  const theme = lightTheme;

  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <Global />
        <LandingPage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

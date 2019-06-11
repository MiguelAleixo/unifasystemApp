import * as React from 'react';
import { DefaultTheme, DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import Routes from './src/routes';

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f'
  }
}

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
}
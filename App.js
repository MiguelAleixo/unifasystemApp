import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Routes from './src/routes';

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    primary: 'red',
    accent: '#F50057'
  }
}

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
}
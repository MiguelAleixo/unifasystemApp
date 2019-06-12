import * as React from 'react';
import { DefaultTheme, DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import Routes from './src/routes';

export default function Main() {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}
import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Routes from './src/routes';

export default function Main() {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}
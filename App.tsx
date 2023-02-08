import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Main } from './src/index'

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Main />
    </React.Fragment>
  );
}
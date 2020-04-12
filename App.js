import React from 'react';
import {StatusBar} from 'react-native';

import Index from './src';

export default function App() {
  return (
    <>
      <Index />
      <StatusBar backgroundColor="#575e64" barStyle="light-content" />
    </>
  );
}

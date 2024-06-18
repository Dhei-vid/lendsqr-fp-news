import React from 'react';
import {MainProvider} from './context/MainContext';
import RootNavigation from './src/navigation/root-navigation';

export default function App() {
  return (
    <MainProvider>
      <RootNavigation />
    </MainProvider>
  );
}

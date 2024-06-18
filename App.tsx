import React from 'react';
import {MainProvider} from './context/MainContext';
import RootNavigation from './src/navigation/root-navigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

export default function App() {
  return (
    <MainProvider>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </MainProvider>
  );
}

import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import store from './src/config/store';

import Navigator from './src/navigation/routes';

EStyleSheet.build({
  // $mainContainerMargin: {
  //   paddingTop: 40,
  //   paddingHorizontal: 15,
  //   paddingBottom: 15,
  // },

  $defaultElementMargin: 40,

  $listSeparatorColor: 'rgba(227, 227, 229, 1)',
  $headerSeparatorColor: '#a7a7a7',

  $labelColor: '#333',
  $buttonBackgroundColor: '#3069C5',
  $errorLabelColor: '#f00',
});

console.disableYellowBox = true;

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;

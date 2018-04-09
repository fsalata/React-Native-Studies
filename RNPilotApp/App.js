import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './src/navigation/routes';

EStyleSheet.build({
  $mainContainerMargin: {
    paddingTop: 40,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },

  $defaultElementMargin: 40,

  $labelColor: '#333',
  $buttonBackgroundColor: '#3069C5',
  $errorLabelColor: '#f00',
});

console.disableYellowBox = true;

const App = () => <Navigator />;

export default App;

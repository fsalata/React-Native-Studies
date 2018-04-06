import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './src/navigation/routes';

EStyleSheet.build({
  $mainContainerMargin: {
    paddingTop: 40,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },

  $labelColor: '#333',
  $buttonBackgroundColor: '#3069C5',
  $errorLabelColor: '#f00',
});

const App = () => <Navigator />;

export default App;

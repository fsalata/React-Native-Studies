import React from 'react';
import { View, Text } from 'react-native';
import Navigator from './src/navigation/routes';

import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $mainContainerMargin: {
    paddingTop: 40,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
});

export default class App extends React.Component {
  render() {
    return <Navigator />;
  }
}

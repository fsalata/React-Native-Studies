import React, { Component } from 'react';
import { View } from 'react-native';
import { Loading } from '../components/Loading';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ backgroundColor: '#f00', flex: 1 }}>
        <Loading />
      </View>
    );
  }
}

export default Login;

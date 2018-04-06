import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// import { Loading } from '../components/Loading';
import { LoginInput } from '../components/LoginInput';
import { Button } from '../components/Button';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={EStyleSheet.value('$mainContainerMargin')}>
        <View>
          <LoginInput textValue={this.state.username} placeholder="E-mail" />
          <LoginInput
            textValue={this.state.password}
            placeholder="Senha"
            isSecure
            extraMarginTop={20}
          />
        </View>
        <View style={{ marginTop: 40 }}>
          <Button title="LOGIN" />
          <LoginSeparator />
          <Button title="CADASTRE-SE" />
        </View>
      </View>
    );
  }
}

const LoginSeparator = () => (
  <View
    style={{
      flexDirection: 'row',
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <View
      style={{
        borderBottomWidth: EStyleSheet.hairlineWidth,
        borderBottomColor: '#000',
        flex: 1,
        height: 0,
        marginHorizontal: 10,
      }}
    />
    <Text style={{ fontSize: 11 }}>OU</Text>
    <View
      style={{
        borderBottomWidth: EStyleSheet.hairlineWidth,
        borderBottomColor: '#000',
        flex: 1,
        height: 0,
        marginHorizontal: 10,
      }}
    />
  </View>
);

export default Login;

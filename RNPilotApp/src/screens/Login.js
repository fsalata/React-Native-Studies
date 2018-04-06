import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// import { Loading } from '../components/Loading';
import { LoginInput } from '../components/LoginInput';
import { Button } from '../components/Button';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    };
  }

  componentWillMount() {}

  validateEmail = (text) => {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({ email: text });
      return false;
    }
    return true;
  };

  usernameTextChangeHandler = (text) => {
    this.setState({
      email: text.toLowerCase().trim(),
      emailError:
        this.validateEmail(this.state.email) === false && [...text].length > 3
          ? 'E-mail inválido'
          : '',
    });
  };

  passwordTextChangeHandler = (text) => {
    this.setState({ password: text.toLowerCase().trim(), passwordError: '' });
  };

  LoginHandle = async () => {
    if (this.state.email.trim() === '' || this.state.password.trim() === '') {
      if (this.state.email.trim() === '') {
        this.setState({ emailError: 'O campo e-mail não pode ser vazio.' });
      }
      if (this.state.password.trim() === '') {
        this.setState({ passwordError: 'O campo senha não pode ser vazio.' });
      }
    } else {
      this.setState({ emailError: '', passwordError: '' });

      if (this.validateEmail(this.state.email)) {
        try {
          const usersList = await AsyncStorage.getItem('ListaUsuarios');
          const users = JSON.parse(usersList);

          if (users !== null) {
            const user = users.find(u => u.email.toLowerCase() === this.state.email.toLowerCase());

            if (user) {
              if (user.password === this.state.password) {
                alert('Logado');
              } else {
                this.setState({ passwordError: 'Senha incorreta' });
              }
            } else {
              alert('usuário não encontrado');
            }
          }
        } catch (error) {
          alert(error);
        }
      } else {
        this.setState({ emailError: 'Email inválido' });
      }
    }
  };

  render() {
    return (
      <View style={EStyleSheet.value('$mainContainerMargin')}>
        <View>
          <LoginInput
            textValue={this.state.email}
            placeholder="E-mail"
            onChangeText={this.usernameTextChangeHandler}
            errorMessage={this.state.emailError}
          />
          <LoginInput
            textValue={this.state.password}
            placeholder="Senha"
            onChangeText={this.passwordTextChangeHandler}
            isSecure
            extraMarginTop={20}
            errorMessage={this.state.passwordError}
          />
        </View>
        <View style={{ marginTop: 40 }}>
          <Button title="LOGIN" onPress={this.LoginHandle} />
          <LoginSeparator />
          <Button
            title="CADASTRE-SE"
            onPress={() => {
              try {
                AsyncStorage.setItem(
                  'ListaUsuarios',
                  JSON.stringify([
                    {
                      email: 'bin@bin.com',
                      password: '123',
                    },
                  ]),
                );
              } catch (error) {
                alert(error);
              }
            }}
          />
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

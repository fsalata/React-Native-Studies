import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// import { Container } from '../components/Container';
import { Avatar } from '../components/Avatar';
import { CustomInput } from '../components/CustomInput';
import { Button } from '../components/Button';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userPhoto: '',
      name: '',
      email: '',
      emailConfirmation: '',
      cpf: '',
      nameError: '',
      emailError: '',
      emailConfirmationError: '',
      cpfError: '',
    };
  }

  validateEmail = (text) => {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({ email: text });
      return false;
    }
    return true;
  };

  emailTextChangeHandler = (text) => {
    this.setState({
      email: text.toLowerCase().trim(),
      emailError:
        this.validateEmail(this.state.email) === false && [...text].length > 3
          ? 'E-mail inválido'
          : '',
    });
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={EStyleSheet.value('$mainContainerMargin')}
        keyboardVerticalOffset={80}
      >
        <ScrollView>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: EStyleSheet.value('$defaultElementMargin'),
            }}
          >
            <Avatar userAvatar={this.state.userPhoto} />
          </View>

          <View
            style={{
              paddingBottom: EStyleSheet.value('$defaultElementMargin'),
            }}
          >
            <CustomInput floatingLabel="Nome" />
            <CustomInput
              floatingLabel="E-mail"
              textValue={this.state.password}
              onChangeText={this.emailTextChangeHandler}
              extraMarginTop={20}
              errorMessage={this.state.emailError}
            />
            <CustomInput floatingLabel="Senha" extraMarginTop={20} />
            <CustomInput floatingLabel="Confirmar senha" extraMarginTop={20} />
            <CustomInput floatingLabel="CPF" extraMarginTop={20} />
          </View>

          <Button title="CADASTRE-SE" onPress={() => this.props.navigation.navigate('Register')} />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default Register;

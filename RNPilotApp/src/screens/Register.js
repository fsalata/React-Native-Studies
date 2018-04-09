import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// import { Container } from '../components/Container';
import { Avatar } from '../components/Avatar';
import { CustomInput } from '../components/CustomInput';
import { CustomMaskedInput } from '../components/CustomMaskedInput';
import { Button } from '../components/Button';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userPhoto: '',
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      cpf: '',
      nameError: '',
      emailError: '',
      passwordError: '',
      passwordConfirmationError: '',
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
            <CustomInput
              floatingLabel="Nome"
              textValue={this.state.name}
              onChangeText={text => this.setState({ name: text })}
              extraMarginTop={20}
              errorMessage={this.state.name}
            />
            <CustomInput
              floatingLabel="E-mail"
              textValue={this.state.email}
              onChangeText={this.emailTextChangeHandler}
              extraMarginTop={20}
              keyboardType="email-address"
              errorMessage={this.state.emailError}
            />
            <CustomInput
              floatingLabel="Senha"
              textValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
              extraMarginTop={20}
              errorMessage={this.state.passwordError}
            />
            <CustomInput
              floatingLabel="Confirmar senha"
              textValue={this.state.passwordConfirmation}
              onChangeText={text => this.setState({ passwordConfirmation: text })}
              extraMarginTop={20}
              errorMessage={this.state.passwordConfirmationError}
            />
            <CustomMaskedInput
              floatingLabel="CPF"
              textValue={this.state.cpf}
              onChangeText={text => this.setState({ cpf: text })}
              mask="[000].[000].[000]-[00]"
              extraMarginTop={20}
              errorMessage={this.state.cpfError}
              keyboardType="numeric"
            />
            {/* <CustomInput floatingLabel="CPF" extraMarginTop={20} /> */}
          </View>

          <Button title="CADASTRE-SE" onPress={() => this.props.navigation.navigate('Register')} />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default Register;

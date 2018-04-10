import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView, AsyncStorage } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ImagePicker from 'react-native-image-picker';

// import { Container } from '../components/Container';
import { Avatar } from '../components/Avatar';
import { CustomInput } from '../components/CustomInput';
import { CustomMaskedInput } from '../components/CustomMaskedInput';
import { Button } from '../components/Button';

import styles from './styles';

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

  userPhotoHandler = () => {
    const options = {
      title: 'Selecionar foto',
      mediaType: 'photo',
      cameraType: 'front',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: `data:image/jpeg;base64,${response.data}` };

        this.setState({
          userPhoto: source,
        });
      }
    });
  };

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

  isCPFValid = (c) => {
    if ((c = c.replace(/[^\d]/g, '')).length !== 11) return false;

    if (c === '00000000000') return false;

    let r;
    let s = 0;

    for (let i = 1; i <= 9; i++) s += parseInt(c[i - 1]) * (11 - i);

    r = (s * 10) % 11;

    if (r === 10 || r === 11) r = 0;

    if (r !== parseInt(c[9])) return false;

    s = 0;

    for (let i = 1; i <= 10; i++) s += parseInt(c[i - 1]) * (12 - i);

    r = (s * 10) % 11;

    if (r === 10 || r === 11) r = 0;

    if (r !== parseInt(c[10])) return false;

    return true;
  };

  register = async () => {
    let isValid = true;

    this.setState({
      nameError: '',
      emailError: '',
      passwordError: '',
      passwordConfirmationError: '',
      cpfError: '',
    });

    if (this.state.name === '') {
      this.setState({ nameError: 'O nome deve ser preenchido' });
      isValid = false;
    }

    if (this.state.email === '') {
      this.setState({ emailError: 'O email deve ser preenchido' });
      isValid = false;
    }

    if (this.state.password === '') {
      this.setState({ passwordError: 'A senha deve ser preenchido' });
      isValid = false;
    } else if (this.state.password !== this.state.passwordConfirmation) {
      this.setState({ passwordConfirmationError: 'As senhas não coincidem' });
      isValid = false;
    }

    if (this.state.cpf === '') {
      this.setState({ cpfError: 'O CPF deve ser preenchido' });
      isValid = false;
    } else if (!this.isCPFValid(this.state.cpf)) {
      this.setState({ cpfError: 'O CPF não é válido' });
      isValid = false;
    }

    if (isValid === true) {
      if (await this.saveUser()) {
        alert('Usuário Salvo');
      }
    }
  };

  saveUser = async () => {
    try {
      const usersList = await AsyncStorage.getItem('ListaUsuarios');
      let users = usersList === null ? [] : JSON.parse(usersList);

      if (users !== null) {
        const user = users.find(u => u.cpf.trim() === this.state.cpf.trim());

        if (user) {
          alert('Usuário já cadastrado');
          return false;
        }
      }
      const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        cpf: this.state.cpf,
        userPhoto: this.state.userPhoto,
      };

      users = [...users, newUser];

      try {
        AsyncStorage.setItem('UsersList', JSON.stringify(users));
        AsyncStorage.setItem('LoggedUser', JSON.stringify(newUser));
      } catch (error) {
        alert(error);
        return false;
      }
    } catch (error) {
      alert(error);
      return false;
    }

    return true;
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={60}
      >
        <ScrollView style={EStyleSheet.value('$mainContainerMargin')} style={styles.screen}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: EStyleSheet.value('$defaultElementMargin'),
            }}
          >
            <Avatar userAvatar={this.state.userPhoto} onPress={this.userPhotoHandler} />
          </View>

          <View
            style={{
              paddingBottom: EStyleSheet.value('$defaultElementMargin'),
            }}
          >
            <CustomInput
              floatingLabel="Nome"
              textValue={this.state.name}
              onChangeText={text => this.setState({ name: text, nameError: '' })}
              extraMarginTop={20}
              errorMessage={this.state.nameError}
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
              onChangeText={text => this.setState({ password: text, passwordError: '' })}
              extraMarginTop={20}
              isSecure
              errorMessage={this.state.passwordError}
            />
            <CustomInput
              floatingLabel="Confirmar senha"
              textValue={this.state.passwordConfirmation}
              isSecure
              onChangeText={text =>
                this.setState({ passwordConfirmation: text, passwordConfirmationError: '' })
              }
              extraMarginTop={20}
              errorMessage={this.state.passwordConfirmationError}
            />
            <CustomMaskedInput
              floatingLabel="CPF"
              textValue={this.state.cpf}
              onChangeText={(formatted, extracted) =>
                this.setState({ cpf: extracted, cpfError: '' })
              }
              mask="[000].[000].[000]-[00]"
              extraMarginTop={20}
              errorMessage={this.state.cpfError}
              keyboardType="numeric"
            />

            <View style={{ marginTop: 20 }}>
              <Button title="CADASTRE-SE" onPress={this.register} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default Register;

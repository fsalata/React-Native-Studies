import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  AsyncStorage,
  Alert,
  ImageStore,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { saveLoggedUser } from '../actions/user';

// import { Container } from '../components/Container';
import { Avatar } from '../components/Avatar';
import { CustomInput } from '../components/CustomInput';
import { CustomMaskedInput } from '../components/CustomMaskedInput';
import { Button } from '../components/Button';
import { Loading } from '../components/Loading';

import styles from './styles';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userPhotoURI: null,
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
      isLoading: false,
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
        // console.log('User cancelled image picker');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      } else {
        ImageStore.removeImageForTag(this.state.photoURI);

        ImageStore.addImageFromBase64(
          response.data,
          (uri) => {
            this.setState({
              userPhotoURI: uri,
            });
          },
          (error) => {
            alert(error);
            this.setState({
              userPhotoURI: null,
            });
          },
        );
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
      email: text,
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
      this.setState({ isLoading: true });
      if (await this.saveUser()) {
        Alert.alert(
          'Sucesso!',
          'Usuário cadastrado',
          [
            {
              text: 'OK',
              onPress: () => this.props.navigation.navigate('Employees'),
            },
          ],
          { cancelable: false },
        );
      }
    }
    this.setState({ isLoading: false });
  };

  saveUser = async () => {
    try {
      const usersList = await AsyncStorage.getItem('UsersList');
      let users = usersList === null ? [] : JSON.parse(usersList);

      if (users.length > 0) {
        const user = users.find(u =>
          u.cpf.trim() === this.state.cpf.trim() ||
            u.email.trim() === this.state.email.trim());

        if (user) {
          Alert.alert('Atenção', 'Usuário já cadastrado');
          return false;
        }
      }

      const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        cpf: this.state.cpf,
        userPhotoURI: this.state.userPhotoURI,
      };

      users = [...users, newUser];

      try {
        AsyncStorage.setItem('UsersList', JSON.stringify(users));
        this.props.dispatch(saveLoggedUser(newUser));
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
    if (this.state.isLoading) {
      return <Loading />;
    }

    const photoURI = this.state.userPhotoURI
      ? { uri: this.state.userPhotoURI }
      : '';

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={60}
      >
        <ScrollView contentContainerStyle={styles.screen}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: EStyleSheet.value('$defaultElementMargin'),
            }}
          >
            <Avatar
              userAvatar={photoURI}
              onPress={this.userPhotoHandler}
              width={80}
              height={80}
            />
          </View>

          <View
            style={{
              paddingBottom: EStyleSheet.value('$defaultElementMargin'),
            }}
          >
            <CustomInput
              floatingLabel="Nome"
              textValue={this.state.name}
              onChangeText={text =>
                this.setState({ name: text, nameError: '' })
              }
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
              capitalize={false}
            />
            <CustomInput
              floatingLabel="Senha"
              textValue={this.state.password}
              onChangeText={text =>
                this.setState({ password: text, passwordError: '' })
              }
              extraMarginTop={20}
              isSecure
              errorMessage={this.state.passwordError}
            />
            <CustomInput
              floatingLabel="Confirmar senha"
              textValue={this.state.passwordConfirmation}
              isSecure
              onChangeText={text =>
                this.setState({
                  passwordConfirmation: text,
                  passwordConfirmationError: '',
                })
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

export default connect()(Register);

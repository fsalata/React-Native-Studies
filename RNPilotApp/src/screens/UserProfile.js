import React, { Component } from 'react';
import { View, Text, AsyncStorage, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import TextInputMask from 'react-native-text-input-mask';

import { loggoutUser } from '../actions/user';
import { Container } from '../components/Container';
import { Avatar } from '../components/Avatar';
import { Button } from '../components/Button';

import styles from './styles';

const pageStyles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 11,
    marginTop: 5,
    marginLeft: 1,
    textAlign: 'center',
  },
});

class UserProfile extends Component {
  logout = async () => {
    try {
      await AsyncStorage.removeItem('LoggedUser');
      this.props.navigation.navigate('Login');
      this.props.dispatch(loggoutUser());
    } catch (error) {
      alert(error);
    }
  };

  render() {
    const photoURI = this.props.user.userPhotoURI
      ? { uri: this.props.user.userPhotoURI }
      : '';

    return (
      <Container>
        <View style={styles.screen}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 20,
            }}
          >
            <Avatar
              userAvatar={photoURI}
              touchDisabled
              width={80}
              height={80}
            />
          </View>
          <View style={{ paddingBottom: 80 }}>
            <Text style={pageStyles.title}>{this.props.user.name}</Text>
            <Text style={pageStyles.subtitle}>{this.props.user.email}</Text>
            <TextInputMask
              value={this.props.user.cpf}
              underlineColorAndroid="transparent"
              mask="[000].[000].[000]-[00]"
              editable={false}
              selectTextOnFocus={false}
              style={pageStyles.subtitle}
            />
          </View>
          <Button title="Sair" onPress={this.logout} />
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;

  return {
    user,
  };
};

export default connect(mapStateToProps)(UserProfile);

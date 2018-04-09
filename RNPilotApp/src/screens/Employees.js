import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import { CustomSearch } from '../components/CustomSearch';

class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedUser: '',
    };
  }

  render() {
    return (
      <View>
        <CustomSearch />
        <Text>Employees</Text>
        <Button onPress={() => this.props.navigation.navigate('ToDos')} title="go" />
      </View>
    );
  }
}

export default Employees;

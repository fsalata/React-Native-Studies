import React, { Component } from 'react';
import { FlatList } from 'react-native';
import openMap from 'react-native-open-maps';

import { Container } from '../components/Container';
import { EmployeesListItem } from '../components/EmployeesListItem';
import { Loading } from '../components/Loading';

import styles from './styles';
// import { CustomSearch } from '../components/CustomSearch';

class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(responseJson => this.setState({ employees: responseJson, isLoading: false }))
      .catch((error) => {
        alert(error);
      });
  }

  handleButtonsPress = (route, userID) => {
    this.props.navigation.navigate(route, { userID });
  };

  handleMapPress = (latitude, longitude) => {
    console.log(`${latitude} ${longitude}`);
    openMap({ latitude, longitude });
  };

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <Container>
        <FlatList
          data={this.state.employees}
          renderItem={user => (
            <EmployeesListItem
              name={user.item.name}
              username={user.item.username}
              onMapPress={() =>
                this.handleMapPress(user.item.address.geo.lat, user.item.address.geo.lng)
              }
              onToDoPress={() => this.handleButtonsPress('ToDos', user.item.id)}
              onPostsPress={() => this.handleButtonsPress('Posts', user.item.id)}
              onAlbumsPress={() => this.handleButtonsPress('Albums', user.item.id)}
            />
          )}
          key={user => user.item.id}
          contentContainerStyle={styles.listScreen}
        />
      </Container>
    );
  }
}

export default Employees;

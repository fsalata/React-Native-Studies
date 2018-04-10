import React, { Component } from 'react';
import { FlatList } from 'react-native';

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

  handleToDoPress = (route, userID) => {
    this.props.navigation.navigate(route, { userID });
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
              onToDoPress={() => this.handleToDoPress('ToDos', user.item.id)}
              onPostsPress={() => this.handleToDoPress('Posts', user.item.id)}
              onAlbumsPress={() => this.handleToDoPress('Albums', user.item.id)}
            />
          )}
          key={user => user.item.id}
          style={styles.screen}
        />
      </Container>
    );
  }
}

export default Employees;

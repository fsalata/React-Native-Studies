import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { Container } from '../components/Container';
import { Loading } from '../components/Loading';
import { ToDoListItem } from '../components/ToDoListItem';

import styles from './styles';

class ToDos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const { userID } = this.props.navigation.state.params;

    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userID}`)
      .then(response => response.json())
      .then(responseJson => this.setState({ todos: responseJson, isLoading: false }))
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <Container>
        <FlatList
          data={this.state.todos}
          renderItem={todo => (
            <ToDoListItem todo={todo.item} bgColor={todo.item.completed ? '#080' : '#a00'} />
          )}
          key={todo => todo.item.id}
          contentContainerStyle={styles.listScreen}
        />
      </Container>
    );
  }
}

export default ToDos;

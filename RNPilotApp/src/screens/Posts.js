import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';

import { Container } from '../components/Container';
import { Loading } from '../components/Loading';
import styles from './styles';

// https://jsonplaceholder.typicode.com/todos?userId=1

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const { userID } = this.props.navigation.state.params;

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
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
            <View>
              <Text>{todo.item.title}</Text>
            </View>
          )}
          key={todo => todo.item.id}
          style={styles.screen}
        />
      </Container>
    );
  }
}

export default Posts;

import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { Container } from '../components/Container';
import { Loading } from '../components/Loading';
import { PostListItem } from '../components/PostListItem';
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

  handlePostPress = (postID) => {
    this.props.navigation.navigate('PostDetail', { postID });
  };

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <Container>
        <FlatList
          data={this.state.todos}
          renderItem={post => (
            <PostListItem post={post.item} onPress={() => this.handlePostPress(post.item.id)} />
          )}
          key={post => post.item.id}
          contentContainerStyle={styles.listScreen}
        />
      </Container>
    );
  }
}

export default Posts;

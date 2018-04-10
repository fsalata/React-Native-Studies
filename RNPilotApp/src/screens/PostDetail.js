import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { Container } from '../components/Container';
import { Loading } from '../components/Loading';
import { PostDetailListItem } from '../components/PostDetailListItem';
import styles from './styles';

// https://jsonplaceholder.typicode.com/todos?userId=1

class PostDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const { postID } = this.props.navigation.state.params;

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`)
      .then(response => response.json())
      .then(responseJson => this.setState({ comments: responseJson, isLoading: false }))
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
          data={this.state.comments}
          renderItem={comment => <PostDetailListItem comment={comment.item} />}
          key={comment => comment.item.id}
          contentContainerStyle={styles.listScreen}
        />
      </Container>
    );
  }
}

export default PostDetail;

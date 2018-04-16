import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { Container } from '../components/Container';
import { Loading } from '../components/Loading';
import { PostListItem } from '../components/PostListItem';
import { CustomSearch } from '../components/CustomSearch';

import styles from './styles';

// https://jsonplaceholder.typicode.com/todos?userId=1

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      rawData: [],
      filteredData: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const { userID } = this.props.navigation.state.params;

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
      .then(response => response.json())
      .then(responseJson =>
        this.setState({
          rawData: responseJson,
          filteredData: responseJson,
          isLoading: false,
        }))
      .catch((error) => {
        alert(error);
      });
  }

  handlePostPress = (postID) => {
    this.props.navigation.navigate('PostDetail', { postID });
  };

  searchTextClear = () => {
    this.setState({
      term: '',
      filteredData: this.state.rawData,
    });
  };

  searchHandler = (text) => {
    const results = this.state.rawData.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.body.toLowerCase().includes(text.toLowerCase()));

    this.setState({
      term: text,
      filteredData: results,
    });
  };

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <Container>
        <CustomSearch
          value={this.state.term}
          onChangeText={this.searchHandler}
          onClearText={this.searchTextClear}
        />
        <FlatList
          data={this.state.filteredData}
          renderItem={post => (
            <PostListItem
              post={post.item}
              onPress={() => this.handlePostPress(post.item.id)}
            />
          )}
          key={post => post.item.id}
          contentContainerStyle={styles.listScreen}
        />
      </Container>
    );
  }
}

export default Posts;

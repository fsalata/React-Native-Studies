import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { Container } from '../components/Container';
import { Loading } from '../components/Loading';
import { ToDoListItem } from '../components/ToDoListItem';
import { CustomSearch } from '../components/CustomSearch';

import styles from './styles';

class ToDos extends Component {
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

    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userID}`)
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

  searchTextClear = () => {
    this.setState({
      term: '',
      filteredData: this.state.rawData,
    });
  };

  searchHandler = (text) => {
    const results = this.state.rawData.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase()));

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
          renderItem={todo => (
            <ToDoListItem
              todo={todo.item}
              bgColor={todo.item.completed ? '#080' : '#a00'}
            />
          )}
          key={todo => todo.item.id}
          contentContainerStyle={styles.listScreen}
        />
      </Container>
    );
  }
}

export default ToDos;

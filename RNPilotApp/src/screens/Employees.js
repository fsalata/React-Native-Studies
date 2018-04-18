import React, { Component } from 'react';
import { FlatList } from 'react-native';
import openMap from 'react-native-open-maps';
import { connect } from 'react-redux';

import { hideSearch } from '../actions/search';

import { Container } from '../components/Container';
import { CustomSearch } from '../components/CustomSearch';
import { EmployeesListItem } from '../components/EmployeesListItem';
import { Loading } from '../components/Loading';

import styles from './styles';

class Employees extends Component {
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
    this.props.dispatch(hideSearch());

    fetch('https://jsonplaceholder.typicode.com/users')
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

  handleButtonsPress = (route, userID) => {
    this.props.navigation.navigate(route, { userID });
  };

  handleMapPress = (latitude, longitude) => {
    openMap({
      latitude,
      longitude,
      zoomLevel: 7,
      name: `${latitude}, ${longitude}`,
    });
  };

  searchTextClear = () => {
    this.setState({
      term: '',
      filteredData: this.state.rawData,
    });
  };

  searchHandler = (text) => {
    const results = this.state.rawData.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.username.toLowerCase().includes(text.toLowerCase()));

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
          renderItem={user => (
            <EmployeesListItem
              name={user.item.name}
              username={user.item.username}
              latitude={user.item.address.geo.lat}
              longitude={user.item.address.geo.lng}
              onMapPress={() =>
                this.handleMapPress(
                  user.item.address.geo.lat,
                  user.item.address.geo.lng,
                )
              }
              onToDoPress={() => this.handleButtonsPress('ToDos', user.item.id)}
              onPostsPress={() =>
                this.handleButtonsPress('Posts', user.item.id)
              }
              onAlbumsPress={() =>
                this.handleButtonsPress('Albums', user.item.id)
              }
            />
          )}
          key={user => user.item.id}
          contentContainerStyle={styles.listScreen}
        />
      </Container>
    );
  }
}

export default connect()(Employees);

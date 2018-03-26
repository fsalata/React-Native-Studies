import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import PlaceSearch from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
    };
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      }
    });
  };

  render() {
    const placeList = this.state.places.map((place, i) => {
      return <Text key={i}> { place } </Text>
    })

    return (
      <View style={ styles.container }>
        <PlaceSearch placeAdded={this.placeAddedHandler} />
        <PlaceList places={ this.state.places } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

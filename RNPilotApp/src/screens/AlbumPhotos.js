import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { Container } from '../components/Container';
import { Loading } from '../components/Loading';
import { PhotoListItem } from '../components/PhotoListItem';

// import styles from './styles';

class AlbumsPhotos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const { albumID } = this.props.navigation.state.params;

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`)
      .then(response => response.json())
      .then(responseJson => this.setState({ todos: responseJson, isLoading: false }))
      .catch((error) => {
        alert(error);
      });
  }

  handleAlbumPress = (albumID) => {
    this.props.navigation.navigate('AlbumPhotos', { albumID });
  };

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <Container>
        <FlatList
          numColumns={3}
          horizontal={false}
          columnWrapperStyle={{ justifyContent: 'flex-start', marginHorizontal: 7 }}
          data={this.state.todos}
          renderItem={photo => <PhotoListItem photo={photo.item} />}
          key={photo => photo.item.id}
        />
      </Container>
    );
  }
}

export default AlbumsPhotos;

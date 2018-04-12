import React, { Component } from 'react';
import { FlatList, Modal, TouchableOpacity } from 'react-native';
import Gallery from 'react-native-image-gallery';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container } from '../components/Container';
import { Loading } from '../components/Loading';
import { PhotoListItem } from '../components/PhotoListItem';

// import styles from './styles';

class AlbumsPhotos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      isLoading: true,
      showModal: false,
      selectedPhoto: 0,
    };
  }

  componentDidMount() {
    const { albumID } = this.props.navigation.state.params;

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`)
      .then(response => response.json())
      .then(responseJson =>
        this.setState({
          photos: responseJson.map(item => ({
            ...item,
            thumbnailUrl: item.thumbnailUrl.replace('http://', 'https://'),
            url: item.url.replace('http://', 'https://'),
          })),
          isLoading: false,
        }))
      .catch((error) => {
        alert(error);
      });
  }

  handleAlbumPress = (albumID) => {
    this.props.navigation.navigate('AlbumPhotos', { albumID });
  };

  imagePressHandle = (index) => {
    this.setState({
      showModal: true,
      selectedPhoto: index,
    });
  };

  closeGalleryHandle = () => {
    this.setState({
      showModal: false,
      selectedPhoto: 0,
    });
  };

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <Container>
        <Modal visible={this.state.showModal} transparent>
          <TouchableOpacity
            onPress={this.closeGalleryHandle}
            style={{
              marginTop: 10,
              marginLeft: 20,
              position: 'absolute',
              width: 60,
              height: 60,
              zIndex: 999,
            }}
          >
            <Icon name="ios-close" size={60} color="#fff" />
          </TouchableOpacity>
          <Gallery
            style={{ flex: 1, backgroundColor: 'black' }}
            images={this.state.photos.map(photo => ({
              source: { uri: photo.url },
            }))}
            initialPage={this.state.selectedPhoto}
          />
        </Modal>
        <FlatList
          numColumns={3}
          horizontal={false}
          columnWrapperStyle={{ justifyContent: 'flex-start', marginHorizontal: 7 }}
          data={this.state.photos}
          renderItem={({ item, index }) => (
            <PhotoListItem photo={item} onImagePress={() => this.imagePressHandle(index)} />
          )}
          key={photo => photo.item.id}
        />
      </Container>
    );
  }
}

export default AlbumsPhotos;

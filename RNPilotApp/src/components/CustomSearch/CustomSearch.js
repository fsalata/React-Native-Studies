import React, { Component } from 'react';
import { Animated } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';

import styles from './styles';

class CustomSearch extends Component {
  constructor(props) {
    super(props);

    const initialHeight = new Animated.Value(0);

    this.state = {
      containerHeight: initialHeight,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.showSearch !== this.props.showSearch) {
      if (nextProps.showSearch === true) {
        Animated.timing(this.state.containerHeight, {
          toValue: 48,
          duration: 250,
        }).start();
      } else {
        Animated.timing(this.state.containerHeight, {
          toValue: 0,
          duration: 250,
        }).start();
      }
    }
  }

  render() {
    const { value, onChangeText, onClearText } = this.props;

    // if (!showSearch) {
    //   return null;
    // }

    return (
      <Animated.View
        style={{ height: this.state.containerHeight, overflow: 'hidden' }}
      >
        <SearchBar
          lightTheme
          placeholder="Pesquisar..."
          value={value}
          icon={{ type: 'Ionicons', name: 'search' }}
          clearIcon={{ type: 'Ionicons', name: 'close' }}
          containerStyle={styles.search}
          inputStyle={{ backgroundColor: '#fff' }}
          onChangeText={onChangeText}
          onClearText={onClearText}
        />
      </Animated.View>
    );
  }
}

const mapStateToProps = (state) => {
  const { showSearch } = state.search;

  return {
    showSearch,
  };
};

export default connect(mapStateToProps)(CustomSearch);

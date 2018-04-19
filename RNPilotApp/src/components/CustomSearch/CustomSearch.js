import React, { Component } from 'react';
import { Animated } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';

import styles from './styles';

const ANIMATION_TIMING = 200;

class CustomSearch extends Component {
  constructor(props) {
    super(props);

    const initialHeight = new Animated.Value(-46);

    this.state = {
      containerHeight: initialHeight,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.showSearch !== this.props.showSearch) {
      if (nextProps.showSearch === true) {
        Animated.timing(this.state.containerHeight, {
          toValue: 0,
          duration: ANIMATION_TIMING,
        }).start();
      } else {
        Animated.timing(this.state.containerHeight, {
          toValue: -46,
          duration: ANIMATION_TIMING,
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
        style={{ marginTop: this.state.containerHeight, overflow: 'hidden' }}
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

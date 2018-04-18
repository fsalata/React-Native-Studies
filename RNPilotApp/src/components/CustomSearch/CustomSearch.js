import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';

// import styles from './styles';

class CustomSearch extends Component {
  render() {
    const {
      value, onChangeText, onClearText, showSearch,
    } = this.props;

    if (!showSearch) {
      return null;
    }

    return (
      <SearchBar
        lightTheme
        placeholder="Pesquisar..."
        value={value}
        icon={{ type: 'Ionicons', name: 'search' }}
        clearIcon={{ type: 'Ionicons', name: 'close' }}
        containerStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
        inputStyle={{ backgroundColor: '#fff' }}
        onChangeText={onChangeText}
        onClearText={onClearText}
      />
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

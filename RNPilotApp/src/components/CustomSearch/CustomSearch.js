import React from 'react';
import { SearchBar } from 'react-native-elements';

// import styles from './styles';

const CustomSearch = ({ value, onChangeText, onClearText }) => (
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

export default CustomSearch;

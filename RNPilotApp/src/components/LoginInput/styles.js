import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    borderColor: '#333',
    borderWidth: 0,
    borderBottomWidth: EStyleSheet.hairlineWidth,
  },
  input: {
    paddingVertical: 5,
  },
  error: {
    color: '#f00',
    fontSize: 11,
  },
});

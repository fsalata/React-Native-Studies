import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  label: {
    fontSize: 11,
    color: '$labelColor',
  },
  container: {
    borderColor: '$labelColor',
    borderWidth: 0,
    borderBottomWidth: EStyleSheet.hairlineWidth,
  },
  input: {
    paddingVertical: 5,
  },
  error: {
    color: '$errorLabelColor',
    fontSize: 11,
    height: 14,
  },
});

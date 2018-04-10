import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: EStyleSheet.hairLineWidth,
    borderBottomColor: '$listSeparatorColor',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

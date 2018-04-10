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
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

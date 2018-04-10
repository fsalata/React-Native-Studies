import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 15,
  },
  map: {
    width: '100%',
    height: 200,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },
  subtitle: {
    fontSize: 11,
    marginTop: 5,
    marginLeft: 1,
  },
  linksContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  links: {
    textAlign: 'center',
    flexGrow: 1,
    width: 100,
    flexShrink: 1,
  },
});

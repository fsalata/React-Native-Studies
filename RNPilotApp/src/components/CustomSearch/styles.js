import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    borderBottomColor: '$headerSeparatorColor',
    borderBottomWidth: 0.5,
    backgroundColor: '#f7f7f7',
    marginTop: 0,
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '$listSeparatorColor',
    borderRadius: 4,
    padding: 5,
    width: '90%',
  },
  closeIcon: {
    flex: 1,
    paddingTop: 3,
    paddingLeft: 10,
  },
});

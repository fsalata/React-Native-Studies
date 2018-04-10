import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $imageSize: '100% / 3',

  image: {
    backgroundColor: '#fff',
    width: '$imageSize',
    height: '$imageSize',
    flexGrown: 1,
    flexShrink: 1,
  },
});

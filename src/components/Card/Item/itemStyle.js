import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const itemStyle = StyleSheet.create({
  container: {
    height: 180,
    width: width * 0.46,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  img: {
    height: 100,
    width: width * 0.41,
    borderRadius: 6,
  },
  wrapTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {
    width: width * 0.36,
    fontFamily: 'Nunito-Regular',
    color: 'gray',
    fontSize: 12,
  },
  price: {
    fontFamily: 'Nunito-Bold',
    color: 'black',
    fontSize: 14,
  },
});

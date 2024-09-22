/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../utils/helper';

const style = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: 'white',
  },
  homePageWrapper: {
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
    flex: 1,
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default style;

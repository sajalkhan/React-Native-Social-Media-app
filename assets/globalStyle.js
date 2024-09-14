import { StyleSheet } from 'react-native';
import { getFontFamily } from '../utils/helper';

const style = StyleSheet.create({
  homePage: {
    margin: 24,
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userStoryWrapper: {
    marginTop: 12,
    marginBottom: 12,
    minHeight: 70,
    width: '100%',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default style;

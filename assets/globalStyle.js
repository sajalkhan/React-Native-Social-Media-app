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
  userPostWrapper: {
    marginTop: 40,
    marginBottom: 12,
    minHeight: 70,
    width: '100%',
    height: '55%',
    overflow: 'hidden',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default style;

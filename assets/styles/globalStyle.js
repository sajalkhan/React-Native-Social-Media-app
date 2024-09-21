import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../utils/helper';

const style = StyleSheet.create({
  homePage: {
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
  userStoryWrapper: {
    marginTop: 20,
    marginBottom: 30,
    minHeight: 70,
    width: '100%',
    height: 'auto',
  },
  userPostWrapper: {
    marginBottom: 12,
    minHeight: 70,
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default style;

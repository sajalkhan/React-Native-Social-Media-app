import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../utils/helper';

const style = StyleSheet.create({
  notification: {
    backgroundColor: '#EEF5FD',
    padding: 14,
    borderRadius: 50,
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#CACDDE',
  },
  messageContainer: {
    backgroundColor: '#F35BAC',
    color: '#FFFFFF',
    width: 16,
    height: 16,
    borderRadius: 50,
    textAlign: 'center',
    position: 'absolute',
    top: 9,
    right: 8,
    fontSize: 10,
    fontFamily: getFontFamily('Inter_18pt', 400),
  },
});

export default style;

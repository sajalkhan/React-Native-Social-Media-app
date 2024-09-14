import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../utils/helper';

const style = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'semibold',
    color: '#022150',
    fontFamily: getFontFamily('Inter_18pt', 600),
  },
});

export default style;

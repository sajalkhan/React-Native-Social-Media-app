import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../utils/helper';
import { scaleFontSize } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    fontSize: scaleFontSize(24),
    fontWeight: 'semibold',
    color: '#022150',
    fontFamily: getFontFamily('Inter_18pt', 600),
  },
});

export default style;

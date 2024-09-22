import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../utils/helper';

import { horizontalScale, scaleFontSize } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter_18pt', 500),
    fontSize: scaleFontSize(16),
    padding: horizontalScale(15),
  },
  titleNotFocused: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter_18pt', 400),
  },
});

export default style;

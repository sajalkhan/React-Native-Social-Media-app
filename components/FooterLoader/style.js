import { StyleSheet } from 'react-native';
import { verticalScale } from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    marginBottom: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

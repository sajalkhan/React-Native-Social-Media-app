import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../utils/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userPostWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: verticalScale(15),
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  imageWrapper: {
    height: 65,
    width: 65,
    padding: horizontalScale(7),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#F35BAC',
  },
  userImage: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
    overflow: 'hidden',
  },
  userPostImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: verticalScale(10),
    marginBottom: verticalScale(5),
  },
  userDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    marginLeft: horizontalScale(10),
  },
  userName: {
    fontSize: scaleFontSize(16),
    marginTop: verticalScale(5),
    fontFamily: getFontFamily('Inter_18pt', 600),
    color: '#000000',
  },
  title: {
    fontSize: scaleFontSize(12),
    fontFamily: getFontFamily('Inter_18pt', 400),
    color: '#79869F',
  },
});

export default style;

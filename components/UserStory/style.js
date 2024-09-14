import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../utils/helper';

const style = StyleSheet.create({
  userItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  imageWrapper: {
    height: 65,
    width: 65,
    padding: 7,
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
  textContainer: {
    width: 65,
    overflow: 'hidden',
  },
  userName: {
    fontSize: 14,
    marginTop: 5,
    fontFamily: getFontFamily('Inter_18pt', 600),
    textAlign: 'center',
    color: '#022150',
  },
});

export default style;

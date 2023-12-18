import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
  },
  container: {
    padding: 24,
  },
  sectionTitle: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.blue,
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  uploadContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grey,
    borderStyle: 'dotted',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginTop: 8,
  },
  uploadCircle: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: colors.lightGrey,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadPlus: {
    color: colors.white,
    fontSize: 28,
    marginTop: -4,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingBottom: 16,
  },
  imageCont: {
    flexDirection: 'row',
    marginTop: 8,
    marginRight: 8,
  },
  delete: {
    width: 24,
    height: 24,
    marginLeft: -16,
    marginTop: -10,
  },
  textarea: {
    minHeight: 150,
    paddingTop: 16,
  },
  button: {
    marginBottom: 160,
  },
  buttonDateTime: {
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  containerTime: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rowTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  labelTime: {
    marginRight: 10,
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500'
  },
  inputTime: {
    height: 40,
    width: 50,
    textAlign: 'center',
  },
  separatorTime: {
    marginHorizontal: 5,
  },
});
export default styles;

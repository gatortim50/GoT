import { StyleSheet } from 'react-native';
import { Sizes, RelativeSizes } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ModalHeader: {
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: 'green',
  },
  HeaderTitle: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
  ModalButtonStyle: {
    backgroundColor: 'green',
  },
  icon: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ModalFooter: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'green',
  },
});

export default styles;

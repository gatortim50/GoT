import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.Background,
  },
  buttonContainer: {
    alignItems: 'center',
    width: 150,
  },
  button: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.GradientDark,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: '50%',
  },
  image: {
    width: 180,
    height: '50%',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
});

export default styles;

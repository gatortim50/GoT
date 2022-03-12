import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.Background,
  },
  rateContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  thumbsUp: {
    fontSize: 8,
    marginRight: 5,
  },
  thumbsDown: {
    fontSize: 8,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
  },
  item: {
    backgroundColor: Colors.BackgroundLight,
    borderColor: Colors.GradientDark,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 25,
  },
  defText: {
    fontSize: 12,
    marginLeft: 5,
    marginRight: 5,
  },
  resultsContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  sortButtonContainer: {
    alignItems: 'center',
    width: 200,
  },
  buttonContainer: {
    alignItems: 'center',
    width: 100,
  },
  resultsButtonContainer: {
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#0000000B',
  },
  buttonIcon: {
    color: 'gold',
    marginLeft: 20,
  },
});

export default styles;

import {StyleSheet} from 'react-native';

export const container = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    borderRadius: 4,
  },
  wrapper: {
    flex: 1,
  },
  flatList: {
    paddingLeft: 1,
    paddingRight: 1,
  },
  item: {
    flex: 0.33,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 4,
  },
  title: {
    marginTop: 0,
    marginBottom: 0,
    padding: 7,
    backgroundColor: '#F5F5F5',
    fontWeight: 'normal',
    textAlign: 'left',
  },
  description: {
    fontWeight: '200',
  },
});

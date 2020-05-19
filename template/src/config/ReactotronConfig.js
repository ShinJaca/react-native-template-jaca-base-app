import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from "reactotron-redux";
import reactotronSaga from 'reactotron-redux-saga';


if (__DEV__) {
  const tron = Reactotron
    //   .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure() // controls connection & communication settings
    .use(reactotronRedux()) // add reactotron redux support
    .use(reactotronSaga()) // add reactotron saga support
    .connect() // let's connect!

  tron.clear();
  console.tron = tron;
}
import { AppRegistry } from 'react-native';
import App from './src/screen/App';
import SecondScreen from './src/screen/SecondScreen';
import {
  StackNavigator,
} from 'react-navigation';
const NavigationStack = StackNavigator({
  First: {screen: App, navigationOptions: {
      title: 'First',
    } },

  Second: { screen: SecondScreen, navigationOptions: {
      title: 'Second',
    } }
});
AppRegistry.registerComponent('Navigation', () => NavigationStack);

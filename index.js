/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LoginScreen);

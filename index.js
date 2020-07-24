/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Apps from './src/App';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Apps);

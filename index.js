/**
 * @format
 */

// import {AppRegistry} from 'react-native';
import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import { Navigation } from "react-native-navigation";
Navigation.registerComponent('App', () => App);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'App'
             }
           }  
         ]
       }
     }
  });
});
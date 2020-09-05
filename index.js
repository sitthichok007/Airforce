/**
 * @format
 */

import {AppRegistry, View} from 'react-native';
import App from './App';
import initailChatScreen from "./src/chat/initailChatScreen";
import ChatWithPersonScreen from "./src/chat/ChatWithPersonScreen";
import CartScreen from "./src/cart/cartScreen";
import SelectAddress from "./src/services/SelectAddress";
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import React from "react";


AppRegistry.registerComponent(appName, () => App);

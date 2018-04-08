


import React, { Component } from 'react';

import SearchPage from './SearchPage';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';


 
const App = StackNavigator({
  Home: {screen: SearchPage},
});



export default App;


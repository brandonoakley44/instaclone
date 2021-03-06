/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { StatusBar, SafeAreaView } from 'react-native';

import HomeScreen from './src/screens/HomeScreen/index';


const App = () => {

  return (
   <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
    <HomeScreen  />
    </SafeAreaView>
   </>
  );
};


export default App;

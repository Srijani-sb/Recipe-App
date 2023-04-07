//This code defines a functional component named App that renders a View containing an AppContainer 
//component which handles the navigation of the application.


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';

export default function App() {
  return (
     <AppContainer />
  );
}

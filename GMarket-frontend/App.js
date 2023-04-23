import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import StackSwitcher from './src/navigation/StackSwitcher';
import { COLORS } from './src/contansts/colors';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style = {styles.container}>
      <StackSwitcher/>
      </SafeAreaView>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container : {

    flex: 1,
    width : "100%",
    height : "100%",
    paddingTop: 40,
    color: COLORS.textColor,
  }
})

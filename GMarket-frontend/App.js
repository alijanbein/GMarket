import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import StackSwitcher from './src/navigation/StackSwitcher';

export default function App() {
  return (
    <Provider store={store}>
      <StackSwitcher/>
      <Text>alin</Text>
    </Provider>
  );
}

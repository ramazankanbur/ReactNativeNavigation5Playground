import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';

import ScreenContainer from '../components/ScreenContainer';

const HomeScreen = ({ navigation }) => (
  <ScreenContainer>
    <Text>Master List Screen</Text>
    <Button
      title='React Native by Example'
      onPress={() =>
        navigation.push('Details', { name: 'React Native by Example ' })
      }
    />
    <Button
      title='React Native School'
      onPress={() =>
        navigation.push('Details', { name: 'React Native School' })
      }
    />
    <Button title='Drawer' onPress={() => navigation.toggleDrawer()} />
  </ScreenContainer>
);

export default HomeScreen;

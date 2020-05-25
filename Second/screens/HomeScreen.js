import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Button
        title='Go to details screen'
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;

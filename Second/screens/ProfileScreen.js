import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile screen</Text>
      <Button
        title='Go to details screen'
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default ProfileScreen;

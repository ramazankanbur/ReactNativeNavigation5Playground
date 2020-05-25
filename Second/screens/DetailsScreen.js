import React from 'react';
import { View, Text,Button } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    return (
        <View>
        <Text>Details screen</Text>
        <Button
          title='Go to details screen... again'
          onPress={() => navigation.push('Details')}
        />
        <Button
          title='Go to home screen'
          onPress={() => navigation.navigate('Home')}
        />
        <Button title='Go to back' onPress={() => navigation.goBack()} />
        <Button
          title='Go to first screen'
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  };

  export default DetailsScreen;
  

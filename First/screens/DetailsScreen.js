import React from 'react';
import { Text } from 'react-native';

import ScreenContainer from '../components/ScreenContainer';

const DetailsScreen = ({ route }) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
  </ScreenContainer>
);

export default DetailsScreen;

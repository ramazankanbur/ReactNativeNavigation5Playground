import React from 'react';
import { Text, Button } from 'react-native';

import ScreenContainer from '../components/ScreenContainer';
import { AuthContext } from '../context/context';

const CreateAccountScreen = () => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title='Sign Up' onPress={() => signUp()} />
    </ScreenContainer>
  );
};

export default CreateAccountScreen;

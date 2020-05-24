import React from 'react';
import { Text, Button } from 'react-native';

import ScreenContainer from '../components/ScreenContainer';
import { AuthContext } from '../context/context';

const SignInScreen = ({navigation}) => {
    const { signIn } = React.useContext(AuthContext);

    return (
      <ScreenContainer>
        <Text>Sign In Screen</Text>
        <Button title="Sign In" onPress={() => signIn()} />
        <Button
          title="Create Account"
          onPress={() => navigation.push("CreateAccount")}
        />
      </ScreenContainer>
    );
};

export default SignInScreen;



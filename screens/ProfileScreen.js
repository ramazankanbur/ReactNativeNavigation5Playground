import React from 'react';
import { Text, Button } from 'react-native';

import ScreenContainer from '../components/ScreenContainer';
import { AuthContext } from '../context/context';

const ProfileScreen = ({navigation}) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title='Drawer' onPress={() => navigation.toggleDrawer()} />
      <Button title='Sign Out' onPress={() => signOut()} />
    </ScreenContainer>
  );
};

export default ProfileScreen;

import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from './screens/DrawerContent';
import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import SettingsScreen from './screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerPosition='right'
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name='HomeDrawer' component={MainTabScreen} />
        <Drawer.Screen name='Support' component={SupportScreen} />
        <Drawer.Screen name='Bookmark' component={BookmarkScreen} />
        <Drawer.Screen name='Setting' component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

//context
import { AuthContext } from './context/context';

//screens
import HomeScreen from './screens/HomeScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import ProfileScreen from './screens/ProfileScreen';
import Search2Screen from './screens/Search2Screen';
import SearchScreen from './screens/SearchScreen';
import SignInScreen from './screens/SignInScreen';
import SplashScreen from './screens/SplashScreen';
import DetailsScreen from './screens/DetailsScreen';


const AuthStack = createStackNavigator();
const AuthStackFlow = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name='SignIn'
      component={SignInScreen}
      options={{ title: 'Sign In' }}
    />
    <AuthStack.Screen
      name='CreateAccount'
      component={CreateAccountScreen}
      options={{ title: 'Create Account' }}
    />
  </AuthStack.Navigator>
);


const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackFlow = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen
      name="Details"
      component={DetailsScreen}
      options={({ route }) => ({
        title: route.params.name
      })}
    />
  </HomeStack.Navigator>
);

const SearchStackFlow = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={SearchScreen} />
    <SearchStack.Screen name="Search2" component={Search2Screen} />
  </SearchStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackFlow = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

const TabsFlow = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackFlow} />
    <Tabs.Screen name="Search" component={SearchStackFlow} />
  </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerFlow = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={TabsFlow} />
    <Drawer.Screen name="Profile" component={ProfileStackFlow} />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackFlow = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={DrawerFlow}
        options={{
          animationEnabled: true
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackFlow}
        options={{
          animationEnabled: true
        }}
      />
    )}
  </RootStack.Navigator>
);


export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("token");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("token");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackFlow userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
import * as React from 'react';
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '@screens/HomeScreen';
import SettingsScreen from '@screens/SettingsScreen';
import ProfileScreen from '@screens/ProfileScreen';
import CustomTabBar from '@components/CustomTabBar/CustomTabBar';

const Tab = createBottomTabNavigator<MainTabNavigation>();

export default function App() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

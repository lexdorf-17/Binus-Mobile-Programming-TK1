import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MapScreen from '../screens/MapScreen';
import FormScreen from '../screens/FormScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon name="home" color={color} size={size} /> // Use the Font Awesome icon
            ),
          }}
        />
        <Tab.Screen
          name="Form"
          component={FormScreen}
          options={{
            tabBarLabel: 'Form',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon name="pencil" color={color} size={size} /> // Use the Font Awesome icon
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon name="map-marker" color={color} size={size} /> // Use the Font Awesome icon
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

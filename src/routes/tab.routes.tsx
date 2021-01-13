import React from 'react'
import { StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
} from '@expo/vector-icons'

import * as P from '../pages'

const { Navigator, Screen } = createBottomTabNavigator()

const AppRoutes: React.FC = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Navigator
      sceneContainerStyle={{ backgroundColor: '#15161E' }}
      tabBarOptions={{
        activeTintColor: '#f15454',
        style: {
          backgroundColor: '#15161E',
        },
      }}
    >
      <Screen
        name="Explore"
        component={P.SearchResults}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="search" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="Saved"
        component={P.SearchResults}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart-o" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="Trips"
        component={P.SearchResults}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="airbnb" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="Inbox"
        component={P.SearchResults}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={P.SearchResults}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" size={24} color={color} />
          ),
        }}
      />
    </Navigator>
  </>
)

export default AppRoutes

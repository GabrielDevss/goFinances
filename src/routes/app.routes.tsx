import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import { useTheme } from 'styled-components';

const {Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const themes = useTheme();
  return(
      <Navigator
        tabBarOptions={{ 
          activeTintColor: themes.colors.secondary,
          inactiveTintColor: themes.colors.text,
          labelPosition: "beside-icon",
          style: {
            paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            height: 88
          }
        }}
      >
        <Screen
          name="Listagem"
          component={Dashboard}
          options={{ 
            tabBarIcon: (({ size, color}) => (
              <Feather 
                name="list"
                color={color}
                size={size}
              />

            ))
          }}
        />

        <Screen
          name="Cadastrar"
          component={Register}
          options={{ 
            tabBarIcon: (({ size, color}) => (
              <Feather 
                name="dollar-sign"
                color={color}
                size={size}
              />

            ))
          }}
        />

        <Screen
          name="Resumo"
          component={Register}
          options={{ 
            tabBarIcon: (({ size, color}) => (
              <Feather 
                name="pie-chart"
                color={color}
                size={size}
              />

            ))
          }} 
        />
      </Navigator>
  )
}
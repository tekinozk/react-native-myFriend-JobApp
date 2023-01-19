import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackNavigation from './StackNavigation/StackNavigation'
import Favourite from '../pages/Favourite/Favourite'

const Tab = createBottomTabNavigator()

function TabNavigation() {


  return (
  
        <Tab.Navigator>
            <Tab.Screen options={{headerShown:false}} name='Home' component={StackNavigation} ></Tab.Screen>
            <Tab.Screen options={{headerShown:false}} name='Favourite' component={Favourite} ></Tab.Screen>
        </Tab.Navigator>
  
  )
}

export default TabNavigation
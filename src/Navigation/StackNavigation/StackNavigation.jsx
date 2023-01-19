import React from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import Detail from "../../pages/Detail/Detail"
import Jobs from "../../pages/Jobs/Jobs"
import Favourite from "../../pages/Favourite/Favourite"
import Login from "../../pages/Login/login"
function StackNavigation(){

const Stack = createStackNavigator()


    return (

    <Stack.Navigator>
    <Stack.Screen options={{  title:"Jobs",headerTintColor:"#03a9f4",headerTitleAlign:"center"}} name='Jobs' component={Jobs} ></Stack.Screen>
  <Stack.Screen options={{  title:"Detail",headerTintColor:"#03a9f4",headerTitleAlign:"center"}} name='Detail' component={Detail} ></Stack.Screen>
  <Stack.Screen options={{  title:"Favourite",headerTintColor:"#03a9f4",headerTitleAlign:"center"}} name='Favourite' component={Favourite} ></Stack.Screen>
  <Stack.Screen options={{  title:"Login",headerTintColor:"#03a9f4",headerTitleAlign:"center"}} name='Login' component={Login} ></Stack.Screen>
    </Stack.Navigator>


    )
}
export default StackNavigation
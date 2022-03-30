import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screen/home'
import Login from '../../screen/login'

const Stack = createNativeStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>           
            <Stack.Navigator>
            <Stack.Screen color="black" name='Authentification' component={Login}/>
            <Stack.Screen  name='Home' component={Home} /> 
            </Stack.Navigator>

        </NavigationContainer>
    )
}


export default Routes
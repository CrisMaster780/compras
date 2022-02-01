import React from 'react' 
import { NavigationContainer } from '@react-navigation/native' 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' 
import Menu from '../screens/Menu' 
import Account from '../screens/Account'
import Favourites from '../screens/Favourites'
import Seacrchs from '../screens/Seacrchs'

const Tab= createBottomTabNavigator()

export default function Navigation() {
  return (
   <NavigationContainer>
       <Tab.Navigator>
            <Tab.Screen
                name="menu"
                component ={Menu}
                options={{title:"Menu Principal"}}>
            </Tab.Screen>
            <Tab.Screen
                name="favoritos"
                component ={Favourites}
                options={{title:"Favoritos"}}
                    >
            </Tab.Screen>
            <Tab.Screen
                name="account"
                component ={Account}
                options={{title:"Cuentas"}}
                >
            </Tab.Screen>
            <Tab.Screen
                name="searchs"
                component ={Seacrchs}
                options={{title:"Busquedas"}}
                >
            </Tab.Screen>
       </Tab.Navigator>
       
   </NavigationContainer>
  ) 
}

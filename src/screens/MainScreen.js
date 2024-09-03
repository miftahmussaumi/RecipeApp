import React from 'react';

import RecipeListScreen from './RecipeListScreen';
import ScanRecipeScreen from './ScanRecipeScreen';
import SavedRecipeScreen from './SavedRecipeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="RecipeListScreen" component={RecipeListScreen} options={{
                title: 'Recipes',
                tabBarLabel: 'Recipes',
                tabBarIcon: ({color,size,focused}) => (
                    <Ionicons 
                    name= {focused ? "home" : "home-outline"} 
                    size={size} 
                    color={focused ? '#1d3eb5' : 'grey'} 
                    />
                ),
                tabBarActiveTintColor: '#1d3eb5',
                tabBarInactiveTintColor: 'grey'
            }} />
            <Tab.Screen name="ScanRecipeScreen" component={ScanRecipeScreen} options={{
                title: 'Scan',
                tabBarLabel: 'Scan',
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons
                        name={focused ? "scan" : "scan-outline"}
                        size={size}
                        color={focused ? '#1d3eb5' : 'grey'} 
                    />
                ),
                tabBarActiveTintColor: '#1d3eb5',
                tabBarInactiveTintColor : 'grey'
            }} />
            <Tab.Screen name="SavedRecipeScreen" component={SavedRecipeScreen} options={{
                title: 'Saved',
                tabBarLabel: 'Saved',
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons
                        name={focused ? "bookmark" : "bookmark-outline"}
                        size={size}
                        color={focused ? '#1d3eb5' : 'grey'} 
                    />
                ),
                tabBarActiveTintColor: '#1d3eb5',
                tabBarInactiveTintColor: 'grey'
            }} />
        </Tab.Navigator>
    );
};

export default MainScreen;

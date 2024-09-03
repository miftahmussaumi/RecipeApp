// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './src/screens/MainScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="MainScreen" 
          component={MainScreen} 
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen
          name="RecipeDetailScreen"
          component={RecipeDetailScreen}
          options={{
            title: 'Recipe Detail',
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// function HomeScreen() {
//   const navigation = useNavigation();
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <TouchableOpacity onPress={()=> navigation.navigate('Detail')}>
//         <Text>Go to Detail Screen</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function DetailScreen() {
//   const navigation = useNavigation();
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>This is Detail Screen (●'◡'●)</Text>
//       <TouchableOpacity onPress={() => navigation.navigate('Account')}>
//         <Text>Go to Account Screen</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function AccountScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>This is Account Screen ✨</Text>
//     </View>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Detail" component={DetailScreen} />
//         <Stack.Screen name="Account" component={AccountScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default App;
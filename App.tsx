// import React from "react";
// import {NavigationContainer} from '@react-navigation/native';
// import AuthStack from './src/navigation/AuthStack';

// function App() {
//   return (
//     <NavigationContainer>
//       <AuthStack />
//     </NavigationContainer>
//   );
// }

// export default App;

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from './src/screens/HomeScreen';
import {FullScreen} from './src/screens/FullScreen';
import {ImageDisplay} from './src/screens/ImageDisplay';

const Stack = createStackNavigator();

 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'vertical',
          animationEnabled: false,
        }}
        mode={'card'}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="FullCatogery"
          component={FullScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ImageDisplay"
          component={ImageDisplay}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Pages/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Game from './src/Pages/Game';
import {Provider} from 'react-redux';
import {store} from './src/Store';
import Result from './src/Pages/Result';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={Home}
          />
          <Stack.Screen
            name="Game"
            options={{title: 'Friends Quiz'}}
            component={Game}
          />
          <Stack.Screen
            name="Result"
            options={{title: 'Sua Pontuacão', headerBackVisible: false}}
            component={Result}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

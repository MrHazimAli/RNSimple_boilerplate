import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Launch from '../screens/Launch';
import Home from '../screens/Home';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Launch"
				headerMode='none'
			>
				<Stack.Screen name="Launch" component={Launch} />
				<Stack.Screen name="Home" component={Home} />
			</Stack.Navigator>
    </NavigationContainer>
	)
}

export default App;
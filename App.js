// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
	title="Go to Routes"
	onPress={() => navigation.navigate('Routes')}
      />
      <Button
        title="Go to Ascends"
        onPress={() => navigation.navigate('Ascends')}
      />
    </View>
  );
}

function ListRoutesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>List Routes Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function AscendsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Ascend Screen</Text>
      <Button
        title="Create Ascend"
        onPress={() => navigation.navigate('Create Ascend')}
      />
      <Button
        title="List Ascends"
        onPress={() => navigation.navigate('ListAscends')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function ListAscendsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> List all Ascends Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function CreateAscendScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Create Ascend Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}


function CreateRouteScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Create Route Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}


function RoutesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Routes Screen</Text>
      <Button
        title="Create new Route"
        onPress={() => navigation.navigate('CreateRoute')}
      />
      <Button
        title="List all Routes"
        onPress={() => navigation.navigate('ListRoutes')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Routes" component={RoutesScreen} />
	<Stack.Screen name="Ascends" component={AscendsScreen} />
	<Stack.Screen name="CreateAscend" component={CreateAscendScreen} />
	<Stack.Screen name="ListAscends" component={ListAscendsScreen} />
	<Stack.Screen name="CreateRoute" component={CreateRouteScreen} />
	<Stack.Screen name="ListRoutes" component={ListRoutesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

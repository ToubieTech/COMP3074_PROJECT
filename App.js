import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Splash from "./screens/Splash";
import Home from "./screens/Home";
import Restaurants from './screens/Restaurants';
import AddRestaurant from './screens/AddRestaurant';
import EditRestaurant from './screens/EditRestaurant';
import RestaurantDetail from './screens/RestaurantDetail';
import ShowLocation from './screens/ShowLocation';
import About from './screens/About';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Restaurants' component={Restaurants}></Stack.Screen>
        <Stack.Screen name='AddRestaurant' component={AddRestaurant}></Stack.Screen>
        <Stack.Screen name='RestaurantDetail' component={RestaurantDetail}></Stack.Screen>
        <Stack.Screen name='EditRestaurant' component={EditRestaurant}></Stack.Screen>
        <Stack.Screen name='ShowLocation' component={ShowLocation}></Stack.Screen>
        <Stack.Screen name='About' component={About}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


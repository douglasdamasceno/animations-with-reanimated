import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen} from '../screen/details';
import {HomeScreen} from '../screen/home';

export type RouteStack = {
  Home: undefined;
  Details: {
    profileImg: string;
  };
};

export const Routes = () => {
  const Stack = createNativeStackNavigator<RouteStack>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

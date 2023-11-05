import type {RouteProp} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RouteStackList = {
  Home: undefined;
  Details: {
    profileImg: string;
  };
};

export type RoutesNavigation = NativeStackNavigationProp<RouteStackList>;

export type PagesRoute<RouteName extends keyof RouteStackList> = RouteProp<
  RouteStackList,
  RouteName
>;

import { StackNavigationProp } from '@react-navigation/stack';
import { RestaurantCardProps } from '../../components/RestaurantCard';

export type RootStackParamList = {
  Home: any;
  Restaurant: RestaurantCardProps;
  Basket: any;
  PreparingOrderScreen: any;
  Delivery: any;
};

export type RestaurantScreenProp = StackNavigationProp<
  RootStackParamList,
  'Restaurant'
>;

export type NavigationScreenProp = StackNavigationProp<RootStackParamList>;

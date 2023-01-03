import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useAppSelector } from '../hooks';
import { useNavigation } from '@react-navigation/native';
import { format } from '../commons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type Props = {};
type BasketScreenProp = StackNavigationProp<RootStackParamList, 'Basket'>;

const BasketIcon = (props: Props) => {
  const { items } = useAppSelector((state) => state.basket);
  const basketTotal = items.reduce((total, item) => (total += item.price), 0);
  const navigation = useNavigation<BasketScreenProp>();

  if (items.length === 0) {
    return null;
  }

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Basket');
        }}
        className="bg-[#00CCBB] m-2 p-4 rounded-lg flex-row items-center space-x-1"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {format(basketTotal)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;

const styles = StyleSheet.create({});

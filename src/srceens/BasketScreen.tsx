import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView
} from 'react-native';
import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../hooks';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import { urlFor } from '../../sanity';
import { DishRowProps } from '../components/DishRow';

interface GroupedItems {
  // using array method to group
  //   id: string;
  //   items: DishRowProps[];
  [key: string]: DishRowProps[];
}

type Props = {};

const BasketScreen = (props: Props) => {
  const navigation = useNavigation();
  const restaurant = useAppSelector((state) => state.restaurant.restaurant);
  const { items } = useAppSelector((state) => state.basket);

  const [groupedItemsInBasket, setGroupedItemsInBasket] =
    useState<GroupedItems>();

  const dispatch = useDispatch();

  useMemo(() => {
    // using array method to group
    // const groupedItems = items.reduce((results: GroupedItems[], item) => {
    //   const index = results.findIndex((res) => res.id === item.id);
    //   if (index >= 0) {
    //     results[index].items.push(item);
    //   } else {
    //     results.push({ id: item.id, items: [...[item]] });
    //   }
    //   return results;
    // }, []);

    // using Object key to group the products
    // e.g.
    // {
    //     '[id of product]': DishRowProp
    // }
    const groupedItems = items.reduce((results: GroupedItems, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  console.log(groupedItemsInBasket);

  return (
    // <SafeAreaView className="flex-1 bg-white">
    <View className="flex-1 bg-gray-100">
      <View className="p-5 border-b border-[#00CCBB] bg-white shadow-sm">
        <View>
          <Text className="text-lg font-bold text-center">Basket</Text>
          <Text className="text-center text-gray-400">{restaurant?.title}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="absolute top-3 right-5"
        >
          <Entypo name="cross" color={'#00CCBB'} size={30}></Entypo>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <Text className="flex-1">Deliver in 50 - 75 mins</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]">Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {groupedItemsInBasket &&
          // using Object key
          Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View key={key}>
              <Text>{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
            </View>
          ))}
        {/*  using array method to group */}
        {/* {groupedItemsInBasket.map((grouped) => (
          <View key={grouped.id}>
            <Text>{grouped.items.length} x</Text>
            <Image
              source={{ uri: urlFor(grouped.items[0].image).url() }}
              className="h-12 w-12 rounded-full"
            />
            <Text className="flex-1">{grouped.items[0]?.name}</Text>
          </View>
        ))} */}
      </ScrollView>
    </View>
    // </SafeAreaView>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({});

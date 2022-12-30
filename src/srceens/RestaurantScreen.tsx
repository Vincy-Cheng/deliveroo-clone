import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RestaurantCardProps } from '../components/RestaurantCard';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DishRow from '../components/DishRow';
import sanityClient, { urlFor } from '../../sanity';
type Props = {};

type ParamList = {
  Restaurant: RestaurantCardProps;
};

const RestaurantScreen = (props: Props) => {
  const { params } = useRoute<RouteProp<ParamList, 'Restaurant'>>();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  return (
    <ScrollView>
      {/* <Text>{route.params.restaurant.title}</Text> */}
      <View>
        <Image
          source={{
            uri: urlFor(params.imgUrl).toString()
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        >
          <Feather name="arrow-left" size={20} color="#00CCBB"></Feather>
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{params.title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <FontAwesome name="star" color="#00CCBB80" size={15} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{params.rating}</Text> •{' '}
                {params.genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Entypo name="location" size={15} color="#80808066" />
              <Text className="text-xs text-gray-500">
                Nearby • {params.address}
              </Text>
            </View>
          </View>

          <Text className="text-gray-500 mt-2 pb-4">
            {params.short_description}
          </Text>
        </View>

        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-200">
          <EvilIcons name="question" color="#80808099" size={20}></EvilIcons>
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <Entypo name="chevron-right" size={20} color="#00CCBB"></Entypo>
        </TouchableOpacity>
      </View>

      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
        {/* Dishes */}
        {params.dishes &&
          params.dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;

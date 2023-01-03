import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { urlFor } from '../../sanity';
import { useNavigation } from '@react-navigation/native';
import { IDish } from '../types';
import { RestaurantScreenProp } from '../srceens/props';

export type RestaurantCardProps = {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string | undefined;
  address: string;
  short_description: string;
  dishes: IDish[];
  long: number;
  lat: number;
};

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  lat,
  long
}: RestaurantCardProps) => {
  const navigation = useNavigation<RestaurantScreenProp>();

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() => {
        navigation.navigate('Restaurant', {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          lat,
          long
        });
      }}
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-36 w-64 rounded-sm "
      ></Image>
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <FontAwesome name="star" color="#00800080" size={15} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> • {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <Entypo
            name="location"
            size={15}
            color="#80808066"
            // className="opacity-40"
          />
          <Text className="text-xs text-gray-500">Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

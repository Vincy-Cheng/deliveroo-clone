import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RestaurantCard from './RestaurantCard';
import sanityClient, { urlFor } from '../../sanity';
import { IRestaurant } from '../types';
type FeatureRowProps = {
  id: string;
  title: string;
  description: string;
};

const FeatureRow = ({ id, title, description }: FeatureRowProps) => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured" && _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
      },
    }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="arrowright" size={25} color="#00CCBB"></AntDesign>
      </View>
      <Text className="text-xs text-gray-400 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            id={restaurant._id}
            key={restaurant._id}
            imgUrl={urlFor(restaurant.image).url()}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;

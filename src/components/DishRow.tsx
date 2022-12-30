import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { urlFor } from '../../sanity';
import Entypo from 'react-native-vector-icons/Entypo';
import clsx from 'clsx';

type DishRowProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: Object;
};

const DishRow = ({ id, name, description, price, image }: DishRowProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const format = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'HKD',
      maximumFractionDigits: 0
    }).format(price);
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setIsPressed(!isPressed);
        }}
        // className="bg-white border p-4 border-gray-100"
        className={clsx('bg-white border p-4 border-gray-100', {
          [' border-b-0']: isPressed
        })}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">{format(price)}</Text>
          </View>
          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-300 p-4 border-t[1px] border-[#F3F3F4]"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <Entypo
                name="circle-with-minus"
                color="#00CCBB"
                size={30}
              ></Entypo>
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <Entypo
                name="circle-with-plus"
                color="#00CCBB"
                size={30}
              ></Entypo>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import { NavigationScreenProp } from './props';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';
import { useAppSelector } from '../hooks';

type Props = {};

const DeliveryScreen = (props: Props) => {
  const navigation = useNavigation<NavigationScreenProp>();
  const restaurant = useAppSelector((state) => state.restaurant.restaurant);
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity>
            <Entypo
              name="cross"
              color={'white'}
              size={30}
              onPress={() => {
                navigation.navigate('Home');
              }}
            ></Entypo>
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: 'https://links.papareact.com/fls' }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar color="#00CCBB" indeterminate={true}></Progress.Bar>
          <Text className="mt-3 text-gray-500">
            Your order at {restaurant?.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      {restaurant && (
        <MapView
          initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          }}
          className="flex-1 mt-10 z-0"
          mapType="mutedStandard"
        >
          <Marker
            coordinate={{
              latitude: restaurant.lat,
              longitude: restaurant.long
            }}
            title={restaurant.title}
            description={restaurant.short_description}
            identifier="origin"
            pinColor="#00CCBB"
          ></Marker>
        </MapView>
      )}
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        ></Image>
        <View>
          <Text className="text-lg">Deliveroo Clone</Text>
          <Text className="text-gray-400">Your rider</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({});

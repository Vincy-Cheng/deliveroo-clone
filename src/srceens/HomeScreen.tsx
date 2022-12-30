import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// import { Entypo } from '@expo/vector-icons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../components/Categories';
import FeatureRow from '../components/FeatureRow';
import sanityClient from '../../sanity';
import { IFeaturedCategory } from '../types';

type Props = {};

const HomeScreen = (props: Props) => {
  const navigation = useNavigation();

  const [featuredCategories, setFeaturedCategories] = useState<
    IFeaturedCategory[]
  >([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type =="featured"] {
        ...,
        dishes[]->
      }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  // console.log(featuredCategories);
  return (
    <SafeAreaView className="bg-white pt-5 flex-1">
      {/* HomeScreen */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="w-7 h-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>

          <Text className="font-bold text-xl">
            Current Location
            <Entypo name="chevron-down" size={20} color="#00CCBB"></Entypo>
          </Text>
        </View>

        <Feather name="user" size={35} color="#00CCBB"></Feather>
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <EvilIcons name="search" size={20} color="gray" />
          <TextInput
            placeholder="Restaurant and cuisines"
            keyboardType="default"
          ></TextInput>
        </View>
        <Entypo name="sound-mix" size={20} color="#00CCBB" />
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />
        {featuredCategories?.map((Fcategory) => (
          <FeatureRow
            key={Fcategory._id}
            id={Fcategory._id}
            title={Fcategory.name}
            description={Fcategory.short_description}
          />
        ))}

        {/* <FeatureRow
          id={2}
          title={'Tasty Discount'}
          description={"Everyone's been enjoying these juicy discounts!"}
        />
        <FeatureRow
          id={3}
          title={'Offers near you!'}
          description={'Why not support your local restaurant tonights!'}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

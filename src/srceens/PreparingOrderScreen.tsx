import { Animated, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreenProp } from './props';

type Props = {};

const PreparingOrderScreen = (props: Props) => {
  const navigation = useNavigation<NavigationScreenProp>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animated.Image
        source={require('../../assets/deliveroo.gif')}
        className="h-96 w-96"
      ></Animated.Image>
      <Animated.Text className="text-lg my-10 text-white font-bold text-center">
        Waiting for Restaurant to accept your order!
      </Animated.Text>

      <Progress.Circle
        size={60}
        indeterminate={true}
        color="white"
      ></Progress.Circle>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;

const styles = StyleSheet.create({});

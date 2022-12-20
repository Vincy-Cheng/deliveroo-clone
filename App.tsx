import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/srceens/HomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import RestaurantScreen from './src/srceens/RestaurantScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'home' }}
        ></Stack.Screen>
        <Stack.Screen
          name="Restaurant"
          component={RestaurantScreen}
          options={{ title: 'Restaurant' }}
        ></Stack.Screen>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
  // return (
  //   <SafeAreaView>
  //     <View>
  //       <Text>Home</Text>
  //     </View>
  //   </SafeAreaView>
  // );
}

// import React from "react";
// import { StyleSheet, useColorScheme } from "react-native";
// import {
//   NavigationContainer,
// } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { FontAwesome } from "react-native-vector-icons";
// import HomeScreen from "../screens/homeScreen";
// import CartScreen from "../screens/cartScreen";
// const Tab = createBottomTabNavigator();

// export default function AppNavigation() {  
//     return (
//       <NavigationContainer>
//        <Tab.Navigator
//   initialRouteName="Accueil"
//   screenOptions={({ route }) => ({
//     tabBarIcon: ({ color }) => {
//       let iconName;

//       if (route.name === "Accueil") {
//         iconName = "home";
//       } else if (route.name === "Panier") {
//         iconName = "shopping-cart";
//       }
//       return <FontAwesome name={iconName} color={color} size={26} />;
//     },
//     tabBarActiveTintColor: "#3498db",
//     tabBarInactiveTintColor: "#565656",
//     tabBarLabelStyle: {
//       fontSize: 12,
//     },
//     tabBarItemStyle: {
//       marginHorizontal: 10, 
//     },
//   })}
// >
//           <Tab.Screen
//             name="Accueil"
//             component={HomeScreen}
//             options={{ tabBarVisible: false }}
//           />
//           <Tab.Screen name="Panier" component={CartScreen} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     );
//   } 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
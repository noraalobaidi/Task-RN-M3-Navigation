import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsList from "../ProductsList";
import ProductDetail from "../ProductDetail";
import Cart from "../Cart";
import { CartIcon } from "../CartIcon";

const { Navigator, Screen } = createStackNavigator();

export default function RootNavigator() {
  return (
    <Navigator initialRouteName="ProductList">
      <Screen
        name="ProductList"
        component={ProductsList}
        options={{
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "#375C81",
          headerLeft: () => <CartIcon />,
          headerShown: false,
        }}
      />
      <Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ route }) => ({
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "#375C81",
          title: route.params.product.name,
        })}
      />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
}

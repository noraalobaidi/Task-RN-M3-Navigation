import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

import productStore from "../stores/productStore.js";
import { Product } from "./Product.js";

export default function ProductsList({ navigation }) {
  const products = productStore.getProducts();

  function renderProduct({ item: product }) {
    return (
      <Product
        product={product}
        onPress={() =>
          navigation.navigate("ProductDetail", { product: product ,id:product.id})
        }
        
      />
    );
  }

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      data={products}
      renderItem={renderProduct}
    />
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

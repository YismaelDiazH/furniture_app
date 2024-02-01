import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./cartList.style";
import { useCart } from "./cartContext";
import { Ionicons } from "@expo/vector-icons";


const CartList = () => {
    const { cartItems, removeFromCart } = useCart(); 
  

    const handleRemoveItem = (_id) => {
      
      removeFromCart(_id);
    };
  return (
    <FlatList
      data={cartItems}
      keyExtractor={(item) => item._id.toString} 
      renderItem={({ item }) => (
        
        <View style={styles.container}>

           <View style={styles.image}>
          <Image source={{ uri: item.imageUrl }} style={styles.productImg} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.supplier}>{item.supplier}</Text>
          <Text style={styles.supplier}>{item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => handleRemoveItem(item._id)} style={styles.deleteButton}>
            <Ionicons name="trash-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default CartList;

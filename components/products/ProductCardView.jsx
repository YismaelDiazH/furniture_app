import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./productCardView.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              }}
              style={styles.image}
            ></Image>
          </View>
          <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>
              Product
            </Text>
            <Text style={styles.supplier} numberOfLines={1}>
              Product
            </Text>
            <Text style={styles.price}>$2344</Text>
          </View>
      
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;

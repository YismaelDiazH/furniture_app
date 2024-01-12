import { View, TouchableOpacity, Image, Text } from "react-native";
import React, { useState } from "react";
import styles from "./productDetails.style";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(10);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={35} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" color={COLORS.primary} size={35} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }}
        style={styles.image}
      ></Image>
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ 660,99</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={20} color="gold" />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{count}</Text>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWraper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, at
            doloremque ratione magnam quae mollitia molestias repellat, fuga,
            cupiditate obcaecati libero ad saepe facilis non? Fuga recusandae
            suscipit minima harum?
          </Text>
        </View>
        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
              <Text>Grenoblee</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="truck-delivery" size={20} />
              <Text>Free Delivery </Text>
            </View>
          </View>
        </View>

        <View style={styles.cardRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cardBtn}>
            <Text style={styles.cardTitle}>Buy Now!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto name={"shopping-bag"} size={24} color={COLORS.lightWhite}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

import {  Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Cart.style";
import { useRoute } from "@react-navigation/native";

const Cart = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={35}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
          <Text style={styles.heading}> Products </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Cart

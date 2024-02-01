import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import styles from "./Cart.style";
import { SafeAreaView } from "react-native-safe-area-context";
import CartList from "./CartList";
import { useCart } from "./cartContext";

const Cart = ({ navigation }) => {
  const { cartItems } = useCart();

  const handlePressPay = () => {
    navigation.navigate('PaymentScreen'); // Asegúrate de tener esta pantalla en tu Stack.Navigator
  };

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
          <Text style={styles.heading}> Produits </Text>
          
        </View>
<View style={styles.containerCartList}>
          <CartList cartItems={cartItems} />
        </View>
        
      </View>
      {cartItems.length > 0 && (
      <TouchableOpacity onPress={handlePressPay} style={styles.payButton}>
        <Text style={styles.payButtonText}>Payer maintenant</Text>
      </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default Cart;

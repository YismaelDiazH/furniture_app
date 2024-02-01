
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants";

const PaymentScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.thankYouText}>Merci pour votre achat !</Text>
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/190/190411.png' }} 
        style={styles.image}
      />
      <Text style={styles.message}>Votre commande a été traitée avec succès.</Text>
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5', 
    },
    content: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    thankYouText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: COLORS.primary, 
      marginBottom: 20,
    },
    image: {
      width: 150,
      height: 150,
      marginBottom: 20,
    },
    message: {
      fontSize: 18,
      color: '#555', 
      textAlign: 'center',
    },
  });

export default PaymentScreen;

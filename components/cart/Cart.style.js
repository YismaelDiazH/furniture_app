import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
    container: {
      
      flex: 1,
      backgroundColor: COLORS.lightWhite,
    },
    containerCartList:{
marginTop:70
    },
    wrapper: {
      flex: 1,
      backgroundColor: COLORS.lightWhite,
    },
    upperRow: {
      width: SIZES.width - 50,
      marginHorizontal: SIZES.large,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "absolute",
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.large,
      top: SIZES.large,
      zIndex: 999,
    },
    heading: {
      fontFamily: "semibold",
      fontSize: SIZES.medium,
      color: COLORS.lightWhite,
      marginLeft: 5,
    },
    payButton: {
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
      backgroundColor: COLORS.tertiary, 
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginHorizontal: 20, // Para que no se pegue a los bordes de la pantalla
      elevation: 2, // Sombra para Android
      shadowColor: '#000', // Sombra para iOS
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2, 
    },
    
    payButtonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    }
  });

export default styles;

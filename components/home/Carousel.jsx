import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'

const Carousel = () => {
    const slides = [
        "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg",


    ]
  return (
    <View style={styles.carouselContainer} >
      <SliderBox images={slides}
      dotColor={COLORS.primary}
      inactiveDotColor={COLORS.secondary}
      ImageComponentStyle = {{borderRadius:15, width:"95%", marginTop:15}}
      autoplay
      circleLoop
      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center"
    }
})
import { TouchableOpacity, TextInput, View } from 'react-native'
import React from 'react'
import { Feather, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './search.style';
import { SIZES, COLORS } from '../constants';
const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
            
            <Ionicons 
            name="camera-outline" 
            size={SIZES.xLarge} 
            style={styles.searchIcon}
            />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
            <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={()=>{}}
            placeholder="What are you looking for?"
            />
        </View>
        <View>
            <TouchableOpacity style={styles.searchBtn} >
            <Feather name="search" size={24} style={styles.searchIcon}/>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Search

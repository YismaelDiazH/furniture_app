import { TouchableOpacity, TextInput, View, FlatList, Image, Text } from "react-native";
import React, { useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";
import { SIZES, COLORS } from "../constants";
import axios from "axios";
import SearchTile from "../components/products/SearchTile";
const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async() => {

    try {
      const response = await axios.get(
        `https://fast-fjord-22010-5c9f11e5a492.herokuapp.com/api/products/search/${searchKey}`
      );
      setSearchResults(response.data)

    } catch (error) {
      console.log("Failed to get the products ", error);
    }
  };

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
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="Que recherchez-vous ?"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => handleSearch()}
          >
            <Feather name="search" size={24} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length === 0 ? (
        <View
        style={{flex:1}}
        
        >
          <Image
          source={require('../assets/images/Pose23.png')}
        style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
        data={searchResults}
        keyExtractor={(item) => item._id}
        renderItem={({item})=>(<SearchTile item = {item} />)}
        style={{marginHorizontal:12}}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;

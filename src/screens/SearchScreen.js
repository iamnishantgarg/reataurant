import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  return (
    <View style={styles.background}>
      <SearchBar/>
      <Text>Search</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex:1
  }
})

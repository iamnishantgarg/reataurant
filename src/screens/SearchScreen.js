import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const onTermSubmit = () => {
    console.log('submitted');
  }
  return (
    <View style={styles.background}>
      <SearchBar term={term} onTermChange={(newTerm)=>setTerm(newTerm)} onTermSubmit={onTermSubmit}/>
      <Text>{term}</Text>
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

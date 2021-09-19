import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errMessage] = useResults();

  const filterResultsByPrice = (price) => {

    return results.filter(result=> {
      return result.price === price;
    })

  }

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={()=>searchApi(term)}
      />
      {errMessage ? <Text>{errMessage}</Text>:null}
      <Text>we have found : {results.length}</Text>
      <ResultsList 
        title = 'Cost Effective'
        results = {filterResultsByPrice('$')}
      />
      <ResultsList
        title='Bit Pricer'
        results = {filterResultsByPrice('$$')}
      />
      <ResultsList
        title='Big Spender'
        results = {filterResultsByPrice('$$$')}
      />
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

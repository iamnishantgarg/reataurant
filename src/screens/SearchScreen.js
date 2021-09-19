import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errMessage, setErrMessage] = useState("");

  const searchApi = async () => {
    console.log(term);
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err); 
      setErrMessage('SOmething went wrong');
    }
  }

  return (
    <View style={styles.background}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi}/>
      {errMessage ? <Text>{errMessage}</Text>:null}
      <Text>we have found : {results.length}</Text>
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

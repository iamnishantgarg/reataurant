import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
  const id =navigation.getParam('id');

  console.log(result);

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getResult(id);
  }, [])

  if(!result) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={result.photos}
        keyExtractor={(item)=>item}
        renderItem={({item})=>{
          return (
            <Image
              source={{uri:item}}
              style={styles.image}
            />
          )
        }}
      />
    </View>
  )
}

export default ResultsShowScreen

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
})

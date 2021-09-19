import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ResultsDetail from './ResultsDetail'
import {withNavigation} from 'react-navigation'

const ResultsList = ({title, results, navigation}) => {
  if(!results.length>0) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>{
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow',{id: item.id})}>
              <ResultsDetail result={item}/>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default withNavigation(ResultsList);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom:5
  }
})

import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
  const context = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <Text>{context}</Text>
    </View>
  )
}

export default IndexScreen

const styles = StyleSheet.create({})

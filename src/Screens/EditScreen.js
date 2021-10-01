import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state, updateBlogPost } = useContext(Context);
  const blogPost = state.find((item) => item.id === navigation.getParam("id"));
  const [title, setTitle] = useState(blogPost.title || "");
  const [content, setContent] = useState(blogPost.content || "");

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.input}
      />
      <Button
        title="Update Blog Post"
        onPress={() => {
          updateBlogPost(navigation.getParam("id"), title, content, () => {
            navigation.navigate("Index");
          });
        }}
      />
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

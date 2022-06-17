import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: 1,
    title: 'Search',
    screen: 'ListScreen',
  },

]

const NavOptions = (props: NavProps) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => props.term && navigation.navigate(item.screen as never, {
              term: props.term,
            } as never)}
            style={styles.button}>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width:300,
    
  },
  button: {
    backgroundColor: "#333", //#f8f9fa
    borderRadius: 8,
    marginTop: 12,
    padding: 20,
    left: 150,
    position: "absolute",
    width: 120,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

type NavProps = {
  term: string;
}

export default NavOptions
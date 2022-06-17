import React, { useState } from "react";
import { useEffect } from "react";
import * as axios from "axios";
import {
  Button,
  Dimensions,
  View,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { Card, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";
import { Rating, AirbnbRating } from "react-native-ratings";

const Item = ({ name, recipe, image }) => (
  <View>
    <Card containerStyle={{ justifyContent: "center" }}>
      <Carousel
        data={image}
        renderItem={slideshow}
        sliderWidth={327}
        itemWidth={300}
      />
      <Card.Divider />
      <Card.Title>{name}</Card.Title>
      <AirbnbRating />
      <Card.Divider />
      <Text>Recipe: {recipe}</Text>
    </Card>
  </View>
);

const slideshow = ({ item, index }) => {
  return (
    <View
      style={{
        borderRadius: 5,
        height: 300,
        width: 300,
        justifyContent: "center",
      }}
    >
      <Image
        style={{ resizeMode: "contain", height: 300, width: 300 }}
        source={item ? { uri: item } : require("../assets/notFound.png")}
      />
    </View>
  );
};

const ListScreen = () => {
  const route = useRoute<RouteProps>();
  const { term } = route.params;
  const navigation = useNavigation();
  const [recipe, setRecipe] = useState<Recipe>();
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    Promise.all([
      axios.default.get(`http://192.168.56.1:3000/Recipes/${term}`),
    ]).then(([{ data: recipeResults }]) => {
      if (recipeResults) setRecipe(recipeResults);
    });
  }, []);

  const renderItem = ({ item }) => (
    <Item name={item.name} recipe={item.recipe} image={item.image} />
  );

  return (
    <SafeAreaView>
      <View>
        <SearchBar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <FlatList
          data={recipe}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
        <Button
          onPress={() =>
            term &&
            navigation.navigate(
              "CommentScreen" as never,
              {
                term: term,
              } as never
            )
          }
          title="comments"
          color="#00FFFF"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listScreen: {
    flex: 1,
    backgroundColor: "#fff",
    height: 100,
  },
});

type RouteParams = {
  term: string;
};

type RouteProps = {
  params: RouteParams;
  name: string;
  key: string;
};

type Recipe = {
  name: string;
  recipe: string;
  image: Array<string>;
};

export default ListScreen;

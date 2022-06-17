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
const CommentScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>this is the comment screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default CommentScreen;

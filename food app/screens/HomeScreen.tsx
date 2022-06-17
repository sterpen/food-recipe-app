import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavOptions from '../components/NavOptions';


const HomeScreen = () => {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
      <ImageBackground source={require('../assets/white.jpg')} resizeMode="cover" style={styles.backgroundImage}>
        
        <Image
          style={styles.image}
          source={require('../assets/logo.jpg')}
        />
        <TextInput style={styles.searchInput}
          placeholder="Type Here..."
          onChangeText={(text: string) => setSearch(text)}
          value={search}
          autoCapitalize='none'
        />
        <NavOptions term={search} />
        </ImageBackground>
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  backgroundImage:{
    flex: 1,
    justifyContent: "center",
    width:"100%"
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain'    
  },
  searchInput: {
    width: 300,
    height: 40,
    left:50,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
  }
});
type RouteParams = {
  term: string;
};

type RouteProps = {
  params: RouteParams
  name: string;
  key: string;
};

type GeometryCoordinates = {
  latitude: number;
  longitude: number;
}
type GeometryBounds = {
  northeast: GeometryCoordinates;
  southwest: GeometryCoordinates;
}
type GeometryResult = {
  bounds: GeometryBounds;
  location: GeometryCoordinates;
}
type GeocodeResult = {
  geometry: GeometryResult;
}

type RegionCoordinates = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
type Region = {
  region: RegionCoordinates;
}
type University = {
  name: string;
  lat: number;
  lng: number;
}
type NavProps = {
  term: string;
}

export default HomeScreen

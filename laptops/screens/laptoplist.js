import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native'
import { Button, ListItem, FAB } from "@rneui/base"
import { getAllLaptops } from "../rest_laptop/laptop"
import { useState, useEffect } from 'react'

export const Laptopslist = ({ navigation }) => {
  const [laptopList, setLaptoplist] = useState();
  fnRefreshList = (laptop) => {
    setLaptoplist(laptop);
  }

  useEffect(()=>{
    getAllLaptops(fnRefreshList);
  },[]);

  const LaptopItem = ({ laptop }) => {
    return <TouchableHighlight onPress={()=>{
      navigation.navigate("LaptopsFormNav",{laptopParam:laptop});

    }}>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{laptop.id} {laptop.marca} {laptop.precesador} {laptop.memoria}</ListItem.Title>
          <ListItem.Subtitle>{laptop.disco}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableHighlight>
  }
  return <View style={styles.container}>
    <FlatList
      data={laptopList}
      renderItem={({ item }) => {

        return <LaptopItem laptop={item} />
      }}
    />
    <FAB
      title="+"
      onPress={() => { navigation.navigate("LaptopsFormNav",{}) }}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column', // eje principal
    alignItems: 'stretch', // eje Secundario
    justifyContent: 'flex-start',// JP
  },
});

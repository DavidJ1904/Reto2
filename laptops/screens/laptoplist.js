import {View, Text, StyleSheet, FlatList} from 'react-native'
import {Button, ListItem} from "@rneui/base"
import {getAllLaptops} from "../rest_laptop/laptop"
import { useState } from 'react'

export const Laptopslist =()=>{
    const [laptopList, setLaptoplist]=useState();
    fnRefreshList=(laptop)=>{
        setLaptoplist(laptop);
    }

  const LaptopItem =({laptop})=>{
    return <ListItem>
    <ListItem.Content>
      <ListItem.Title>{laptop.id} {laptop.marca} {laptop.precesador} {laptop.memoria}</ListItem.Title>
      <ListItem.Subtitle>{laptop.disco}</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
  }
    return <View>
        <Text>Lista de Laptops</Text>
        <Button
        title="Consulta"
        onPress={
          ()=>{
            getAllLaptops(fnRefreshList);
          }
        }
        />
        <FlatList
        data={laptopList}    
        renderItem={({item})=>{

            return <LaptopItem laptop={item}/>
        }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
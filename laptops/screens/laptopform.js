import {View, Text, StyleSheet, Alert} from 'react-native'
import {Input, Button} from '@rneui/base'
import { useState } from 'react'
import {saveLaptopsRest} from '../rest_laptop/laptop'


export const LaptopsForm = ({navigation})=>{
    const [marca,setMarca] = useState();
    const [procesador,setProcesador] = useState();
    const [memoria,setMemoria] = useState();
    const [disco,setDisco] = useState();

    const showMessage=()=>{
      Alert.alert("CONFIRMACION","LAPTOP CREADA EXITOSAMENTE")
    }

    const saveLaptops = ()=>{
      console.log("saveLaptops");
      navigation.goBack();
      saveLaptopsRest(
        {
          marca:marca,
          procesador:procesador,
          memoria:memoria,
          disco:disco
        },
        showMessage
      );
    }
    return <View style={styles.container}>
        <Text>Formulario de Laptops</Text>
        <Input
          value={marca}
          placeholder="Marca"
          onChangeText={(value)=>{
            setMarca(value);
          }}
        />
        <Input
        value={procesador}
        placeholder="Procesador"
        onChangeText={(value)=>{
          setProcesador(value);
        }}
      />
      <Input
          value={memoria}
          placeholder="Memoria"
          onChangeText={(value)=>{
            setMemoria(value);
          }}
        />
      <Input
          value={disco}
          placeholder="Disco"
          onChangeText={(value)=>{
            setDisco(value);
          }}
        />
        <Button
        title= "Guardar"
        onPress={saveLaptops}        
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
  
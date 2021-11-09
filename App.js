/* Importações externas: */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* Importações Internas: */
import PrimeiraView from './src/components/Primeiro';
import CompOficial, { Comp1, Comp2 } from './src/components/Multi';
import MinMax from './src/components/MinMax';
// import MinMax from './src/components/MinMax';


export default function App() {
  return (

    <View style={styles.container}>
{/* 
      <Text>Olááá</Text>

      <PrimeiraView></PrimeiraView>
      <CompOficial></CompOficial>
      <Comp1></Comp1>
      <Comp2></Comp2> */}

      <MinMax valorY="7" valorX="12"></MinMax>
      <MinMax valorY="2000" valorX="78"></MinMax>

    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
  },

});

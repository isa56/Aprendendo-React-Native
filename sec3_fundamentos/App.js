/* Importações externas: */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

/* Importações Internas: */
import PrimeiraView from './src/components/Primeiro';
import CompOficial, { Comp1, Comp2 } from './src/components/Multi';
import MinMax from './src/components/MinMax';
import RandomNum from './src/components/Aleatorio';
import Titulo from './src/components/Titulo';
import Botao from './src/components/Botao';
import Contador from './src/components/Contador';
// import Pai from './src/components/direta/Pai';
import PaiDois from './src/components/indireta/PaiDois';
import Contador2 from './src/components/contador/Contador2';
import Diferenciar from './src/components/Diferenciar';
import ParImpar from './src/components/ParImpar';
import Familia from './src/components/relacao/Familia';
import Membro from './src/components/relacao/Membro';
import UsuarioLogado from './src/components/UsuarioLogado';
import ListaProdutos from './src/components/produtos/ListaProdutos';
import ListaProdutos2 from './src/components/produtos/ListaProdutos2';
import DigiteSeuNome from './src/components/DigiteSeuNome';
import FlexboxV1 from './src/components/layout/FlexboxV1';
import FlexboxV2 from './src/components/layout/FlexboxV2';
import FlexboxV3 from './src/components/layout/FlexboxV3';
import FlexboxV4 from './src/components/layout/FlexboxV4';
import Mega from './src/components/mega/Mega';

export default function App() {
  return (

    <SafeAreaView style={styles.container}>

      {/* 
      <Text>Olááá</Text>

      <PrimeiraView></PrimeiraView>
      <CompOficial></CompOficial>
      <Comp1></Comp1>
      <Comp2></Comp2> 
      <MinMax valorY="7" valorX="12"></MinMax>
      <MinMax valorY="2000" valorX="78"></MinMax>
      <RandomNum min={1} max={10}></RandomNum>   
      <Titulo principal="Cadastro do Produto" secundario="Tela de Cadastro do Produto"></Titulo> 
      <Botao title="Botão :D"/>
      <Contador initialValue={0} step={12}/>
      <Contador initialValue={10}/> 
      <Pai/> 
      <PaiDois />
      <Contador2></Contador2>
      <Diferenciar/>
      <ParImpar num={5}/>
      <ParImpar num={10}/>
      <ParImpar num={12}/>
      <ParImpar num={7878941}/>
      <Familia>
        <Membro nome="Isadora" sobrenome="Ferreira" />
        <Membro nome="Davi" sobrenome="Ferreira" />
      </Familia>

      <Familia>
        <Membro nome="Evelyn" sobrenome="Fernandes" />
        <Membro nome="Endrio" sobrenome="Fernandes" />
        </Familia>
        <UsuarioLogado usuario={  {nome:"Isa", email:"isadora@mail.com"}  } />
      <ListaProdutos></ListaProdutos>
      <ListaProdutos2/>
      <DigiteSeuNome />
      <FlexboxV1/>
      <FlexboxV2/>
      <FlexboxV3/>
      <FlexboxV4/>
      */}

      <Mega qtdeNumeros={7} min={1} max={100} />





    </SafeAreaView>
  
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

import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Button from './src/components/Button';
import Display from './src/components/Display';


const initialState = {
  clearDisplay: false,
  current: 0,
  displayValue: '0',
  operation: null,
  values: [0, 0],
};

export default class App extends React.Component {

  state = { ... initialState};


  addDigit = (n) => {

    /* DEBUGANDO: */
    //NO TERMINAL: react-native log-android
    console.debug(typeof this.state.displayValue)

    /* FIM DO DEBUG */

    
    // Percebe se é necessário limpar a tela na próxima atualização:
    // Caso o número atual seja 0 ou se é preciso limpar;
    const clearDisplay = (this.state.displayValue === '0' || this.state.clearDisplay);
    
    // Não pode ter dois pontos na mesma entrada:
    if(n === '.' && !clearDisplay && this.state.displayValue.includes('.'))
      return;

    // setta o currentValue para o displayValue se não for necessário limpar a tela:
    const currentValue = clearDisplay ? '' : this.state.displayValue;

    // muda o displayValue:
    const displayValue = currentValue + n;

    // Updata o state com as informações atuais:
    this.setState({ displayValue, clearDisplay:false });

    // Verificando se o dígito é válido:
    if(n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [ ... this.state.values];
      values[this.state.current] = newValue;
      this.setState({ values });
    }
  };


  clearMemory = () => {
    this.setState({ ... initialState});
  };


  setOperation = (operation) => {
    // Se o valor é 0, apenas setta o 0 como primeiro número da array de values e espera o próximo valor:
    if(this.state.current === 0) {
      this.setState({operation, current: 1, clearDisplay: true});
    } else {

      const equals = operation === '='; // Recebe se a operação é um igual

      const values = [... this.state.values]; // Destructuring

      try { // Testa, se der exceção vai pro catch
        // Função eval avalia o que está dentro da string. Nesse caso, converte values[0, 1] para number e o caractere operation para a operação correspondente
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      }
      catch (e) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;
      this.setState({
        clearDisplay: !equals,
        current: equals ? 0 : 1,
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        values,
      })

    }

  };

  render() {
    return (

      <SafeAreaView style={style.container}>

        <Display value={this.state.displayValue} />

        <View style={style.buttons}>

          <Button label={"AC"} isTriple onClick={this.clearMemory} />
          <Button label={"/"} isOperation onClick={this.setOperation} />
          <Button label={"7"} onClick={this.addDigit} />
          <Button label={"8"} onClick={this.addDigit} />
          <Button label={"9"} onClick={this.addDigit} />
          <Button label={"*"} isOperation onClick={this.setOperation} />
          <Button label={"4"} onClick={this.addDigit} />
          <Button label={"5"} onClick={this.addDigit} />
          <Button label={"6"} onClick={this.addDigit} />
          <Button label={"-"} isOperation onClick={this.setOperation} />
          <Button label={"1"} onClick={this.addDigit} />
          <Button label={"2"} onClick={this.addDigit} />
          <Button label={"3"} onClick={this.addDigit} />
          <Button label={"+"} isOperation onClick={this.setOperation} />
          <Button label={"0"} isDouble onClick={this.addDigit} />
          <Button label={"."} onClick={this.addDigit} />
          <Button label={"="} isOperation onClick={this.setOperation} />

        </View>

      </SafeAreaView>
    );

  }

}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

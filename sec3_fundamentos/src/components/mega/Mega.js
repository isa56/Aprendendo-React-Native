import React from 'react';
import { Button, SafeAreaView, Text, TextInput, View } from 'react-native';
import styles from '../estilo';
import Numero from './Numero';

// Componentes a partir de classes:
export default class Mega extends React.Component {

    // Usando useState com classe:
    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        // min: this.props.min,
        numerosGerados: [],
    }

    // Usando construtor ao invés de useState ou de `this`
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         max: this.props.max,
    //     }
    // }

    alterarQtdNum = (qtde) => {
        this.setState({ qtdeNumeros: qtde });
    }

    gerarNumeroNaoContido = (nums) => {
        const novo = parseInt(Math.random() * 60) + 1;
        return nums.includes(novo) ? this.gerarNumeroNaoContido : novo;
    }


    gerarNumeros = () => {
        const numerosGerados = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a > b);

        this.setState({ numerosGerados })
    }

    // gerarNumeros = () => {
    //     const { qtdeNumeros } = this.state;
    //     const numeros = [];
    //     for (let i = 0; i < qtdeNumeros; i++)
    //         numeros.push(this.gerarNumeroNaoContido(numeros[i]));

    //     numeros.sort((a, b) => a > b);

    //     this.setState({ numeros });
    // }


    exibirNumeros = () => {
        const nums = this.state.numerosGerados;
        return nums.map(num => {
            return <Numero key={num} num={num}></Numero>
        })
    }



    render() {
        return (
            <>
                <TextInput
                    keyboardType={'numeric'}
                    onChangeText={qtde => this.alterarQtdNum(qtde)}
                    placeholder="Digite a qtd de números"
                    style={{ borderBottom: '1px solid #200' }}
                    value={`${this.state.qtdeNumeros}`}
                />

                <Text style={styles.bigTextStyle}>
                    Gerador de Mega-Sena: {this.state.qtdeNumeros} números
                    {/* {this.props.qtdeNumeros} {this.state.min} {this.state.max} */}
                </Text>

                <Button title='Gerar números' onPress={this.gerarNumeros} />

                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {this.exibirNumeros()}
                </View>
                {/* <Text>{this.state.numerosGerados.join(',')}</Text> */}
            </>
        )
    }

}
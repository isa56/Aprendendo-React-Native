import { Dimensions } from 'react-native';

const params = {
    // Atributos:
    blockSize: 30,
    borderSize: 5,
    difficulty: 0.1,
    fontSize: 15,
    headerRatio: 0.15, // proporção do painel superior na tela
    //Métodos:
    getColumnsAmount() {
        const width = Dimensions.get('window').width;
        return (Math.floor( width / this.blockSize ));
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height;
        const boardHeight = totalHeight * (1 - this.headerRatio);
        return ( Math.floor( boardHeight / this.blockSize ));
    },
}

export default params;
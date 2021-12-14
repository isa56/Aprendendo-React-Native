import React from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import LevelSelection from './src/screens/LevelSelection';
import MineField from './src/components/MineField';

import params from './src/parameters';
import { 
  createMineBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
} from './src/functions';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.createState();
  }


  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return ( Math.ceil( cols * rows * params.difficulty ) );
  }


  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMineBoard( rows, cols, this.minesAmount() ),
      won: false,
      lost: false,
      showLevelSelection: false,
    }
  }

  onOpenField = (row, column) => {

    const board = cloneBoard(this.state.board);

    openField(board, row, column);

    const lost = hadExplosion(board, row, column);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert("Perdeeeeu!!!", "Que peninha :(");
    }

    if (won) {
      Alert.alert("Parabéns!!", "Você ganhou o jogo!!");
    }

    this.setState( {board, lost, won} )

  };

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board);

    invertFlag(board, row, column);

    const won = wonGame(board);

    if (won) {
      Alert.alert("Parabéns!!", "Você ganhou o jogo!!");
    }

    this.setState({board, won});
  };

  onLevelSelected = (level) => {
    params.difficulty = level;
    this.setState(this.createState());
  }

  render() {
    
    return (

      <SafeAreaView style={style.container}>

        <LevelSelection isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection: false })} />

        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({showLevelSelection: true})}
        />

        <View style={style.board}>
          <MineField board={this.state.board} onOpenField={ this.onOpenField } openFlag={ this.onSelectField } />
        </View>


      </SafeAreaView>
    );

  }

};


const style = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },


});


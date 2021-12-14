import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

import Flag from './Flag';
import Mine from './Mine';

import params from '../parameters';

export default (props) => {

    // destructuring do props:
    const { exploded, flagged, mined, nearMines, opened } = props;

    let numMineColor = null;
    if(nearMines > 0) {
        switch (nearMines) {
            case 1: numMineColor = '#2a28d7';
                break;
            case 2: numMineColor = '#2b520f';
                break;
            case 3: case 4: case 5: numMineColor = '#f9060a';
                break;
            default: numMineColor = '#f221a9';
                break;
        }
    }

    // estilos:
    const styleField = [style.field];
    // regular:
    if(!opened && !exploded) styleField.push(style.regular);
    // aberto:
    if(opened) styleField.push(style.opened);
    // explodiu:
    if(exploded) styleField.push(style.exploded);
    // marcado:
    if(flagged) styleField.push(style.flagged, style.regular);



    return(
        <TouchableWithoutFeedback onPress={props.onOpen} onLongPress={props.onInvertFlag} >
            <View style={styleField}>
                { !mined && opened && nearMines > 0 ?
                    <Text style={[ style.label, {color: numMineColor} ]}>
                        {nearMines}
                    </Text>
                : false }

                { mined && opened ? <Mine /> : false }

                { flagged && !opened ? <Flag /> : false}

            </View>
        </TouchableWithoutFeedback>
    );
}

const style = StyleSheet.create({
    field: {
        borderWidth: params.borderSize,
        height: params.blockSize,
        width: params.blockSize,
    },

    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    
    opened: {
        alignItems: 'center',
        backgroundColor: '#999',
        borderColor: '#777',
        justifyContent: 'center',
    },

    label: {
        fontSize: params.fontSize,
        fontWeight: 'bold',
    },

    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    },

    flagged: {

    },

})

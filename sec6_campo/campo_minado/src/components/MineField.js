import React from 'react';
import { StyleSheet, View } from 'react-native';

import Field from './Field';

import createMineBoard from '../functions';


export default (props) => {


    const rows = props.board.map( (row, r) => {

        const columns = row.map( (field, c) => {

            return <Field {...field} onOpen={() => props.onOpenField(r, c)} onInvertFlag={() => props.openFlag(r,c)} key={c} />;

        } );

        return <View style={{flexDirection: 'row',}}
            key={r}>{columns}</View>;

    } );


    return <View style={style.container}>{rows}</View>;


}

const style = StyleSheet.create({

    container: {
        backgroundColor: '#EEE',
        // flexDirection: 'row',
    }

});
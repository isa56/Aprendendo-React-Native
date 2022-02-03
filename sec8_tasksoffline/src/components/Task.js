import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

import moment from 'moment';
import 'moment/locale/pt-br';

import commonStyles from '../commonStyles';

export default (props) => {

    const doneOrNotStyle = props.doneAt != null ? { color: '#888', textDecorationLine: 'line-through'} : {};

    const date = props.doneAt ? props.doneAt : props.estimateAt;
    const formatedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM');

    return (
        <View style={styles.container}>

            <View style={styles.checkContainer}>
                {getCheckView(props.doneAt)}
            </View>

            <View>
                <Text style={[styles.description, doneOrNotStyle]}>{props.description}</Text>
                <Text style={[styles.date, doneOrNotStyle]}>{formatedDate}</Text>
            </View>

        </View>
    );
}

function getCheckView(doneAt) {
    if (doneAt != null) {
        return (
            <View style={styles.done}>
                <Ionicons name="ios-checkmark" size={20} color='#FFF'></Ionicons>
            </View>
        )
    } else {
        return (
            <View style={styles.pending}></View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#AAA',
        flexDirection: 'row',
        paddingVertical: 12,
    },
    checkContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
    },
    pending: {
        borderColor: '#555',
        borderRadius: 13,
        borderWidth: 1,
        height: 25,
        width: 25,
    },
    done: {
        alignItems: 'center',
        backgroundColor: '#4D7031',
        borderColor: '#555',
        borderRadius: 13,
        borderWidth: 1,
        height: 25,
        justifyContent: 'center',
        width: 25,
    },
    description: {
        color: commonStyles.colors.mainText,
        fontFamily: commonStyles.fontFamily,
        fontSize: commonStyles.descriptionFontSize,
    },
    date: {
        color: commonStyles.colors.subText,
        fontFamily: commonStyles.fontFamily,
        fontSize: commonStyles.dateFontSize,
    }



})
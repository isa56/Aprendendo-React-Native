import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import moment from 'moment';
import 'moment/locale/pt-br';

import commonStyles from '../commonStyles';

export default (props) => {

    const doneOrNotStyle = props.doneAt != null ? { color: '#888', textDecorationLine: 'line-through' } : {};

    const date = props.doneAt ? props.doneAt : props.estimateAt;
    const formatedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM');

    const getRightContent = () => {
        return (
            <TouchableOpacity style={styles.rightAction}
                onPress={() => props.onDelete && props.onDelete(props.id)}>
                <Icon name="trash" size={30} color='#FFF' />
            </TouchableOpacity>
        )
    }

    const getLeftContent = () => {
        return (
            <View style={styles.leftAction}
                onPress={() => props.onDelete && props.onDelete(props.id)}>
                <Icon name="trash" size={20} color='#FFF' style={styles.deleteIcon} />
                <Text style={styles.deleteText}>Excluir</Text>
            </View>
        )
    }

    return (
        <Swipeable
            renderRightActions={getRightContent}
            renderLeftActions={getLeftContent}
            onSwipeableLeftOpen={() => props.onDelete && props.onDelete(props.id)} >

            <View style={styles.container}>

                <TouchableWithoutFeedback
                    onPress={() => props.onToggleTask(props.id)} >

                    <View style={styles.checkContainer}>
                        {getCheckView(props.doneAt)}
                    </View>

                </TouchableWithoutFeedback>

                <View>
                    <Text style={[styles.description, doneOrNotStyle]}>{props.description}</Text>
                    <Text style={[styles.date, doneOrNotStyle]}>{formatedDate}</Text>
                </View>

                {/*
                <TouchableOpacity style={styles.editButton} >
                    <Icon name="pencil" size={20} color={commonStyles.colors.secondary} />
                </TouchableOpacity>
                */}

            </View>
        </Swipeable>
    );
}

function getCheckView(doneAt) {
    if (doneAt != null) {
        return (
            <View style={styles.done}>
                <Icon name="check" size={20} color="#FFF" />
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
        backgroundColor: '#FFF',
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
    },
    editButton: {
        alignItems: 'end',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    rightAction: {
        alignItems: 'center',
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    leftAction: {
        alignItems: 'center',
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    deleteIcon: {
        marginLeft: 20,
    },
    deleteText: {
        color: '#FFF',
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        margin: 10,
    },
});

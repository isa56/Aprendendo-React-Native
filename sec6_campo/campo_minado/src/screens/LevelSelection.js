import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// const LevelButtons = (props) => {
//     <TouchableOpacity
//     style={[style.button, style.bg]}
//     onPress={() => props.onLevelSelected(${props.level})}  >
//         <Text style={style.buttonLabel}>{props.label}</Text>
//     </TouchableOpacity>
// } 

export default (props) => {

    return(
        <Modal
            onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType='slide'
            transparent={true}  >
        
            <View style={style.frame}>
                <View style={style.container}>
                    <Text style={style.title}>
                        Selecione o Nível
                    </Text>

                    {/* <LevelButtons bg={styles.bgEasy} level={0.1} label={'Fácil'} /> */}

                    <TouchableOpacity
                        style={[style.button, style.bgEasy]}
                        onPress={() => props.onLevelSelected(0.1)}  >
                            <Text style={style.buttonLabel}>Fácil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[style.button, style.bgMedium]}
                        onPress={() => props.onLevelSelected(0.2)}  >
                            <Text style={style.buttonLabel}>Médio</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[style.button, style.bgHard]}
                        onPress={() => props.onLevelSelected(0.3)}  >
                            <Text style={style.buttonLabel}>Difícil</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </Modal>
    );
}

const style = StyleSheet.create({

    frame: {
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        flex: 1,
        justifyContent: 'center',
    },

    container: {
        alignItems: 'center',
        backgroundColor: '#eee',
        justifyContent: 'center',
        padding: 15,
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    button: {
        marginTop: 10,
        padding: 5,
    },

    bgEasy: {
        backgroundColor: '#49b65d',
    },
    
    bgMedium: {
        backgroundColor: '#2765f7',
    },
    
    bgHard: {
        backgroundColor: '#f26337',
    },

    buttonLabel: {
        color: '#eee',
        fontSize: 20,
        fontWeight: 'bold',
    },

});
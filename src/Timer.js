import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {Feather} from '@expo/vector-icons';


const Timer = ({navigation}) => {

const [time, setTime] = React.useState(0)
const [timerOn, setTimerOn] = React.useState(false)

React.useEffect(() => {
    let interval = null;

    if(timerOn) {
        interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
        }, 10)
    } else {
        clearInterval(interval)
    }

    return () => clearInterval(interval)

}, [timerOn])

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.view}>
            <View style={styles.timer}>
            <Text style={styles.text}>{"0" + Math.floor((time / 60000 % 60))}:</Text>
            <Text style={styles.text}>{"0" + Math.floor((time / 1000 % 60))}:</Text>
            <Text style={styles.text}>{"0" + ((time / 10 % 100))}</Text>
            </View>

            {!timerOn && time === 0 && (
                <Button  title='Start' onPress={() => setTimerOn(true)}/>
            )}
            {timerOn && (
                <Button title='Stop' onPress={() => setTimerOn(false)}/>

            )}
            {!timerOn && (
                <Button title='Resume' onPress={() => setTimerOn(true)}/>
            )}

            {!timerOn && (
                <Button   title='Reset' onPress={() => setTime(0)}/>

            )}


            <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 20, top: 40, backgroundColor: '#000', borderRadius: 50,}}>
                <Feather name='arrow-left' size={40} color='#fff'/>
            </TouchableOpacity>
        </View>
    
    )
}

export default Timer

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    timer: {
        flexDirection: 'row'
    },
    
})

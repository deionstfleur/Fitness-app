import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import {Feather} from '@expo/vector-icons';
import Day from './days';

export default class Progress extends React.Component {
    
    state = {
        color: '#136df3',
        activestate: 'rgba(255,255,255,0.29)'
    }
    
    // const goBack = () => {
    //     navigation.goBack();
    // }


    render(){
        return (
        
            <View style={styles.container}>
                
                <TouchableOpacity style={{position: 'absolute', left: 20, top: 40, backgroundColor: '#000', borderRadius: 50,}}>
                    <Feather name='arrow-left' size={40} color='#fff'/>
                </TouchableOpacity>
    
                    <View style={styles.containerone}>
                        <View style={styles.boxone}>
    
                        </View>
                        <View style={styles.boxtwo}>
                            <Text style={styles.name}>Progress</Text>
                        </View>
                        <View style={styles.boxthree}>
                            <ImageBackground source={require('./images/graphone.png')} style={{width: 400, height: '100%'}} />
                        </View>
                        <View style={styles.boxfour}>
                            <Day dayname="Sun" />
                            <Day dayname="Mon" />
                            <Day dayname="Tue" />
                            <Day dayname="Wed" />
                            <Day dayname="Thu" />
                            <Day dayname="Fri" active={this.state.activestate}/>
                            <Day dayname="Sat" />
                        </View>
                    </View>
                    <View style={styles.containertwo}>
                        
                    </View>
    
                </View>
            
            
        )

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007965'
    },
    containerone: {
        flex: 1,
    },
    containertwo: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60
    },
    boxone: {
        flex: 1
    },
    boxtwo: {
        flex: 0.8,
        marginHorizontal: 35
    },
    
    boxthree: {
        flex: 2.5
    } ,
    boxfour: {
        flex: 0.5,
        color: '#fff',
        flexDirection: 'row'
    },
    name: {
        fontSize: 35,
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: -0.5
    }

})

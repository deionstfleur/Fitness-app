import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, FlatList, Pressable } from 'react-native';
import {Feather} from '@expo/vector-icons';

const Cardio = ({navigation}) => {

    const image = { uri:
    "https://i.pinimg.com/originals/7a/3d/a4/7a3da4644fbe3fdf7dd60368e76a61ef.gif"};

    const goBack = () => {
        navigation.goBack();
    }


    return (
    <View style={{backgroundColor: 'white', flex: 1}}>
        <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
        >

            <Text style={styles.Tagline}>Cardio</Text>

            <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 20, top: 40, backgroundColor: '#000', borderRadius: 50,}}>
                <Feather name='arrow-left' size={40} color='#fff'/>
            </TouchableOpacity>

        </ImageBackground>
  


 <ScrollView>

 
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}> Jog in Place</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 25-45 seconds</Text>
            </View>

         </View>

           
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Jump Squats</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 25-45 seconds</Text>
            </View>

         </View>
                 
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Slow Burpees</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 1 minute</Text>
            </View>

         </View>
                 
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Treadmill</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 5 minutes</Text>
            </View>

         </View>        
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Jumping Lounge</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 25-45 seconds</Text>
            </View>

         </View>        
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Jumping Jacks</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 1 minute</Text>
            </View>

         </View>
         <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>High Knees</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 1 minute</Text>
            </View>

         </View>
      
            
  </ScrollView>
            
        
         

            {/* Buttons with value*/}
            {/* <View> */}
                {/* -*/}
                {/* <Pressable
                onPress={() => console.warn(data: '- clicked')}
                style={styles.button}
                >
                <Text>-</Text>
                </Pressable>

                <Text>0</Text>

                <Pressable
                onPress={() => console.warn(data: '+ clicked')}
                style={styles.button}
                >
                    <Text>+</Text>
            </View> */}

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 380,
        justifyContent: 'flex-end',
    },
    Tagline: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        marginBottom: 30

    },
    row: {
        flexDirection: 'row', 
            justifyContent: 'space-between', 
            padding: 20,
            borderBottomWidth: 1,
            borderColor: 'lightgrey',
    }
});

export default Cardio;
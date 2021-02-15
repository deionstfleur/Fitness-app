import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, FlatList, Pressable } from 'react-native';
import {Feather} from '@expo/vector-icons';

const Back = ({navigation}) => {

    const image = { uri:
    "https://i.imgur.com/i71jQ9K.gif"};

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
                <Text style={{fontWeight: 'bold', fontSize: 20}}> Lat Pulldown</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 4 sets 8-10 reps</Text>
            </View>

         </View>

           
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Wide dumbell row</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 4 sets 8-10 reps</Text>
            </View>

         </View>
                 
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Barbell Deadlift</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}>4 sets 8-10 reps</Text>
            </View>

         </View>
                 
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Inverted Row</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 3 sets 10 reps</Text>
            </View>

         </View>        
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Wide Grip Pullup</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 25-45 seconds</Text>
            </View>

         </View>        
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Landmine One-Arm Row</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 4 sets 10 reps</Text>
            </View>

         </View>
         <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Lying Lateral Raise</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 4 sets 10 reps </Text>
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

export default Back;
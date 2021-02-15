import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, FlatList, Pressable } from 'react-native';
import {Feather} from '@expo/vector-icons';

const Shoulders = ({navigation}) => {

    const image = { uri:
    "https://media2.giphy.com/media/7lugb7ObGYiXe/giphy.gif"};

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

            <Text style={styles.Tagline}>Shoulders Workouts</Text>

            <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 20, top: 40, backgroundColor: '#000', borderRadius: 50,}}>
                <Feather name='arrow-left' size={40} color='#fff'/>
            </TouchableOpacity>

        </ImageBackground>
  


 <ScrollView>

 
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}> Barbell Overhead Press</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 4 Sets 8-10 reps</Text>
            </View>

         </View>

           
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Standing Dumbbell Fly</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 4 Sets 8-10 reps</Text>
            </View>

         </View>
                 
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Face Pull</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 3 Sets 10-12 reps</Text>
            </View>

         </View>
                 
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>High Pull</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 4 Sets 12 reps</Text>
            </View>

         </View>        
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Band Lateral Raise</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 4 Sets 10 reps</Text>
            </View>

         </View>        
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Band Front Raise</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 4 Sets 8-10 reps</Text>
            </View>

         </View>
         <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Shrugs</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 2 Sets 30reps</Text>
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
        color: 'black',
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

export default Shoulders;
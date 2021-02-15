import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, FlatList, Pressable } from 'react-native';
import {Feather} from '@expo/vector-icons';

const Chest = ({navigation}) => {

    const image = { uri:
    "https://i.pinimg.com/originals/44/96/dd/4496dd7bcca41328bdc88aca13f848c8.gif"};

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

            <Text style={styles.Tagline}>Chest Workouts</Text>

            <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 20, top: 40, backgroundColor: '#000', borderRadius: 50,}}>
                <Feather name='arrow-left' size={40} color='#fff'/>
            </TouchableOpacity>

        </ImageBackground>
  


 <ScrollView>

 
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}> Barbell Bench Press</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 4 Sets 8-10 reps</Text>
            </View>

         </View>

           
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Incline Dumbell</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 4 Sets 8-10 reps</Text>
            </View>

         </View>
                 
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Standing Dumbell Curl</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 4 Sets 10 reps</Text>
            </View>

         </View>
                 
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Incline Dumbell Fly</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 3 Sets 12 reps</Text>
            </View>

         </View>        
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Standing Dumbell Curl</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 4 Sets 10 reps</Text>
            </View>

         </View>        
        <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Decline Cables</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 4 Sets 8-10 reps</Text>
            </View>

         </View>
         <View style={styles.row}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Pectoral Fly</Text>
                <Text style={{color: '#8d8d8d', fontSize: 20}}> 4 Sets 8-10 reps</Text>
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

export default Chest;
import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity, FlatList, TextInput, Touchable} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Category from './components/Explore/Category';
const HomeScreen = ({navigation}) => {

const image = { uri: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}

const recentImage = { uri: "https://storage.googleapis.com/isometriclove.appspot.com/weights.png"};

const Music = { uri: "https://images.pexels.com/photos/4162583/pexels-photo-4162583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"};


const Timer = { uri: 'https://images.pexels.com/photos/4114789/pexels-photo-4114789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'};

const [gallery, setGallery] = useState([
    { image1: {uri:
        'https://c8.alamy.com/comp/PTGAX2/young-man-doing-dumbbell-biceps-curls-at-gym-PTGAX2.jpg'}, title: 'bicep', key: '1'
    },
]);
const [imageTwo, setImageTwo] = useState([
    { image2: {uri:
        'https://thumbs.dreamstime.com/b/shirtless-young-man-doing-push-ups-image-muscular-fitness-model-exercising-african-male-model-workout-outdoors-44061974.jpg'}, title: 'chest', key: '2'
    },

]);
const [imageThree, setImageThree] = useState([
    { image3: {uri:
        'https://www.verywellfit.com/thmb/6rllwIZ_77clqHT3ocW_SHzM9gI=/3416x3416/smart/filters:no_upscale()/black-man-running-on-treadmill-in-garage-672155739-5c2e42b646e0fb00019487f0.jpg'}, title: 'cardio', key: '3'
    },
]);
const [imageFour, setImageFour] = useState([
    { image4: {uri:
        'https://images-na.ssl-images-amazon.com/images/I/81UlG7tKZ%2BL._AC_SX425_.jpg'}, title: 'back', key: '4'
    },
]);
const [imageFive, setImageFive] = useState([
    { image5: {uri:
        'https://images-na.ssl-images-amazon.com/images/I/81UlG7tKZ%2BL._AC_SX425_.jpg'}, title: 'Shoulders', key: '4'
    },
]);

const goToPost = () => {
    navigation.navigate('Settings');
}

const goToTwo = () => {
    navigation.navigate('Chest')
}

const goToCardio = () => {
    navigation.navigate('Cardio')
}

const goToBack = () => {
    navigation.navigate('Back')
}

const goToShoulders = () => {
    navigation.navigate('Shoulders')
}

const goToTimer = () => {
    navigation.navigate('Timer')
}

const goToProgress = () => {
    navigation.navigate('Progress')
}

    return (
        <View style={{flexGrow: 1, height: '100%'}}>
           <View>
               <ImageBackground 
               source={image}
               style={{width: '100%', height: 270}}
               imageStyle={{borderBottomRightRadius:65}}
               >

                   <View style={styles.DarkOverlay}></View>
                   <View style={styles.searchContainer}>
                       <Text style={styles.UserGreet}>Hello Deion</Text>
                       <Text  style={styles.UserText}>What would you like to workout today? </Text>
                   </View>
                   <View>
                       <TextInput 
                       style={styles.searchBox}
                       placeholder='Search Workout Plans'
                       placeholderTextColor='#668'
                       ></TextInput>
                       <Feather name='search' size={22} color='#667' style={
                           {position: 'absolute', top: 30, right: 60, opacity: 0.6}}
                        />
                        </View>
                        <Feather name='menu' size={22} color='#fff' style={
                           {position: 'absolute', top: 40, left: 16, opacity: 0.6}}
                        />
                         <Feather name='bell' size={22} color='#fff' style={
                           {position: 'absolute', top: 40, right: 30}}
                        />
               </ImageBackground>
           </View>

            <ScrollView>
                <View style={{padding: 16}}>
                    <Text style={{fontSize: 22, fontWeight: 'bold'}}>Top Exercises</Text>
                </View>
                <View>
                    {/* <FlatList
                    horizontal={true}
                    data={gallery}
                    renderItem={({item}) => {
                        return (
                            <View style={{paddingVertical: 20, paddingLeft: 16}}>
                                <TouchableOpacity onPress={goToPost}>
                                    <Image source={item.image1} style={{width:150,
                                    marginRight: 6, height: 200, borderRadius: 10}} />
                                    <View style={styles.ImageOverlay} />
                                    <Text style={styles.ImageText}>{item.title}</Text>    
                                </TouchableOpacity>  
                            </View>         
                        )
                    }}        
                    /> */}
                </View>
                    <View style={{ height: 130, marginTop: 20}}>
                     <ScrollView
                     horizontal={true}
                     showsHorizontalScrollIndicator={false}
                     >
                    <TouchableOpacity onPress={goToPost}>
                       <Category imageUri={require('../src/images/bicep.jpg')} name="Bicep" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={goToTwo}>
                       <Category imageUri={require('../src/images/chest.jpg')} name="Chest" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToCardio}>
                       <Category imageUri={require('../src/images/cardio.jpg')} name="Cardio" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToBack}>
                       <Category imageUri={require('../src/images/chest.jpg')} name="Back" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToShoulders}>
                       <Category imageUri={require('../src/images/shoulders.jpg')} name="Shoulders" />
                    </TouchableOpacity>

                          </ScrollView>

                      

                    </View>
            

                
                <View>
                    <View style={{padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Progress</Text>
                    </View>
                    <TouchableOpacity onPress={goToProgress}>
                    <Image 
                    source={recentImage}
                    style={{width: '70%', height: 250, borderRadius: 10, alignSelf: 'center'}} />
                    </TouchableOpacity>
                   
                </View>

                        
                <View>
                    <View style={{padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 22, fontWeight: 'bold'}}> Music</Text>
                    </View>
                    <Image 
                    source={Music}
                    style={{width: '90%', height: 250, borderRadius: 10, alignSelf: 'center'}} />
                   
                </View>
         
         
                <View>
                    <View style={{padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 22, fontWeight: 'bold'}}> Timer</Text>
                    </View>
            <TouchableOpacity onPress={goToTimer}>
                    <Image 
                    source={Timer}
                    style={{width: '90%', height: 250, borderRadius: 10, alignSelf: 'center', }} />
            </TouchableOpacity>
                   
                </View>

                
            </ScrollView>
        </View>
    )
} 
const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    DarkOverlay: {
        position: 'absolute',
        top: 0,
        right:0,
        left: 0,
        height: 270,
        backgroundColor: '#000',
        opacity: 0.2,
        borderBottomRightRadius: 65
    },
    searchContainer: {
        paddingTop: 100,
        paddingLeft: 16
    },

    UserGreet: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white'
    },
    UserText: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'white'
    },
    searchBox: {
        marginTop: 16,
        backgroundColor: '#fff',
        paddingLeft: 24,
        padding: 12,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        width: '90%' 
    },
    ImageOverlay: {
        width: 150,
        height: 199,
        marginRight: 8,
        borderRadius: 10,
        position: 'absolute',
        backgroundColor: '#000',
        opacity: 0.2
    },
    ImageText: {
        position: 'absolute',
        color: 'white',
        marginTop: 4,
        fontSize: 14,
        left: 20,
        bottom: 2,
    }
})

export default HomeScreen;
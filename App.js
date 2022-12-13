import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MainCard from './src/MainCard'
import InfoCard from './src/InfoCard'
import { Location } from "react-native-location";



export default function App() {

  const [darkTheme, setDarkTheme] = useState(true)
  const [currentTemperature, setCurrentTemperature] = useState('27')
  const [location, setLocation] = useState('Brasília, Brasil')
const [theme,setTheme] =  useState(false)


const lamp = {

}


  // estilos 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:darkTheme ? "#232634": "#f2f2f2",
      alignItems: 'center',
      // justifyContent: 'center',
    },

    infoCards:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      
    },
    location:{
fontSize: 18,
color: darkTheme ? '#fff': '#123'
    },

    temperature:{
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10
    },

    temperatureText:{
      fontSize: 40,
      color: darkTheme ? '#e0e0e0'  : '#000',
    },
    btnRefresh:{
      position: 'absolute',
      margin: 25,
      alignSelf: 'flex-end',
      
    },
    cardView:{
      color: darkTheme ?  'black' : '#f2f2f2',
      flexDirection: 'row',
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },

    info:{
      alignItems: 'center',
    
      backgroundColor: darkTheme ? '#393e54' : '#123f34',
      borderRadius: 20,
      width: '94%',
      height: 230
    },
    infoText:{
      color: darkTheme ? '#e0e0e0' : '#fff',
      marginTop: 15,
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold'
    
    },
    btnChangeTheme:{
      position: 'absolute',
      margin: 25,
      marginRight: 20,
      alignSelf: 'flex-start',
    
    },


  });

  //https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


  return (

    <View style={styles.container}>
        
        <TouchableOpacity style={styles.btnChangeTheme} onPress={ ()=>setDarkTheme(darkTheme ? false: true)}>
         <MaterialCommunityIcons name="theme-light-dark" color={darkTheme ? "#ccc" : "black"} size={30}/>
             
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.btnRefresh}>
      <Feather name="refresh-cw" style={{marginEnd: 20}} size={25} color={darkTheme ? "#ccc" : "black"} />
      </TouchableOpacity>
      <Feather style={{marginTop: 60}} name="sun" size={50}  color="orange"/>


      <View style={styles.temperature}>
        <Text style={styles.temperatureText}>{currentTemperature}</Text>
        <Text style={[styles.temperatureText, {fontSize: 15}]}>°C</Text>
        
      </View>

      <Text style={styles.location}>{location}</Text>


      <View style={styles.cardView}>
        <MainCard title={"Manhã"}
         backgroundColor={darkTheme? "#ff873d" : "#cc6e30"}
         temperature={"18"}
         icon={"morning"}
         
         />

<MainCard title={"Tarde"}
         backgroundColor={darkTheme? "#d29600" : "#fcc63f"}
         temperature={"21"}
         icon={"afternoon"}
         />
          <MainCard title={"Noite"}
         backgroundColor={darkTheme? "#008081" : "#38b788"}
         temperature={"17"}
         icon={"night"}
         
         />
      </View>


      <View style={styles.info}>
      <Text style={styles.infoText}>Informações adicionais</Text>
        <View style={styles.infoCards}>
          <InfoCard title={"Vento"} value={"65 km/h"}/>
          <InfoCard title={"Umidade"} value={"47%"}/>
          <InfoCard title={"Temp. Máx"} value={"26 km/h"}/>
          <InfoCard title={"Temp. mín"} value={"17 km/h"}/>
        </View>
      </View>

  

    </View>


  )
}






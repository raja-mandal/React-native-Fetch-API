import React from 'react';
import {View, Text, StyleSheet, Button, TextInput,Image, ScrollView} from 'react-native';

const Recipe = ({title,calories,image}) => {
    return (
        <View style={styles.item}>
            <Text>{title}</Text>
            <Text>{calories}</Text>
            <Image style={{ width: 100, height: 100 }} source={{uri: image}} />
        </View>
    );
}

export default Recipe


const styles = StyleSheet.create({


  
    item: {
      marginTop: 24,
    //   padding: 30,
      width: '150%',
      backgroundColor: 'pink',
      fontSize: 24 
    }
  });
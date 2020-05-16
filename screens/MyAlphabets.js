import React from 'react';
import { Text, View,ScrollView,TouchableHighlight,StyleSheet } from 'react-native';
import FlipCard from 'react-native-flip-card'

function MyAlphabets() {
  let alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Y","Z"];
  
  let letter = alphabets.map((index)=>{
    return <View key={index.toString()}>
              <FlipCard 
                key={index.toString() }
                friction={6}
                perspective={1000}
                flipHorizontal={true}
                flipVertical={false}
                flip={false}
                clickable={true}
                onFlipEnd={(isFlipEnd)=>{console.warn('isFlipEnd', isFlipEnd)}}
              >
                <View style={styles.letterStyle}>
                  <Text>
                      {index}
                  </Text>
                </View>
                <View style={[styles.letterStyle,styles.letterStyleBack]}>
                  <Text >
                      {index}
                  </Text>
                </View>
            </FlipCard>
    </View>
    });
  
  return (
    <ScrollView horizontal={true}>
      {letter}
    </ScrollView>
    
  )
}
const styles = StyleSheet.create({
  letterStyle: {
    height : 60,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
  letterStyleBack:{
    backgroundColor: 'gray',
  }

});
export default MyAlphabets;
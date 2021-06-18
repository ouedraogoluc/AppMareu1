import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Filtre = ({navigation}) => {
    return (
        <View>
            <Text
            onPress = {()=>navigation.navigate("heure")}
            >Filtre par heur</Text>
            <Text
            onPress = {()=>navigation.navigate("lieur")}
            >Filtre par lieur</Text>
        </View>
    )
}

export default Filtre

const styles = StyleSheet.create({})

import React, { useState, useEffect } from 'react'
import { StyleSheet, Button, View } from 'react-native'
import firebase from 'firebase'

const ProfileScreen = ({ navigation }) => {


    const onLogout = () => {
        firebase.auth().signOut().then(() => {
            navigation.replace("auth");
        });
    }
    return (
        <View>

            <Button
                title="Logout"
                onPress={() => onLogout()}
            />
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})

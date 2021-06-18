import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, Image, TextInput, Dimensions, View, TouchableHighlight, FlatList } from 'react-native';
import Reunions from './Reunions'
import { FloatingAction } from "react-native-floating-action";
import { getListReunions, deleteListReunions } from '../action';
import { connect } from 'react-redux'
import { Avatar, Icon } from 'react-native-elements'
import { Chip } from 'react-native-paper';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const actions = [
    {
        text: "Add",
        icon: require("../assets/icon1.png"),
        name: "btn_add",
        position: 1

    },
    {
        text: "Profile",
        icon: require("../assets/icon1.png"),
        name: "btn_profile",
        position: 2

    }
];
export class ListReunions extends React.Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation
        this.state = {
            mareu: []
        }
    }
    componentDidMount() {
        fetch("https://demo7050940.mockable.io/mareu ")
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    mareu: responseJson
                })
            })
            .catch(error => console.log(error))
        this.props.getListReunions()
    }
    render() {
        console.log('ListReunions.js', this.props.listOfReunions);
        return (
            <View style={styles.container}>
                <Image style={styles.picture} source={{ uri: this.props.picture }} />
                <FlatList
                    style={{ width: '100%' }}
                    data={this.props.listOfReunions}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Avatar
                                    rounded
                                    source={{
                                        uri:
                                            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.echosdunet.net%2Fdossiers%2Fmeilleur-smartphone%2Fphoto&psig=AOvVaw27qfuPchPy2GKSIWZW8x8B&ust=1621457538907000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDMzaSA1PACFQAAAAAdAAAAABAD",
                                    }}
                                />
                                <Text style={styles.primaryText}>Reunion A{"-"}{item.heureReunions} {"-"}{item.name}  </Text>
                                <Text note numberOfLines={1}
                                >{item.participant}  </Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 25 }}>
                                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Edit', { ...item })}>
                                        <View style={{ marginRight: 15 }}>
                                            <Icon size={30} color="red" name="edit" />
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => this.props.deleteListReunions(item.key)} >
                                        <View>
                                            <Icon
                                                name='delete'
                                                type='material'
                                                color='#e32f45'
                                            />
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        )
                    }}
                >
                </FlatList>
                {/* <FlatList
                    data={this.state.mareu}
                    style={styles.listStyle}
                    renderItem={
                        ({ item }) => <Reunions 
                        heureReunions={item.heureReunions} 
                        lieuReunion={item.lieuReunion} 
                        sujetReunion={item.sujetReunion} 
                        participant={item.participant} 
                        name={item.name}
                        image_url={item.picture}  
                        />
                    }>
                </FlatList> */}
                <FloatingAction
                    style={{ backgroundColor: "red" }}
                    actions={actions}
                    onPressItem={name => {
                        if (name == 'btn_add') {
                            this.navigation.navigate('Add')
                        } else if (name == 'btn_profile') {
                            this.navigation.navigate('Profile')
                        }
                    }}
                />

                <StatusBar style="auto" />
            </View>
        );
    }
}
function mapStateToProps(state) {
    const listOfReunions = _.map(state.ListReunion.ListReunion, (val, key) => {
        return {
            ...val,
            key: key
        }
    })
    return {
        listOfReunions,
    }
}
export default connect(mapStateToProps, { getListReunions, deleteListReunions })(ListReunions);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    primaryText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black',
        marginBottom: 4,
    },

    listStyle: {
    }
});
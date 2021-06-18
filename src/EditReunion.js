//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, Button } from 'react-native';
import {editReunion} from '../action'
import {connect} from 'react-redux'


// create a component
class EditReunion extends Component {
  state={
    name:this.props.navigation.state.params.name,
    heureReunions:this.props.navigation.state.params.heureReunions,
    lieuReunion:this.props.navigation.state.params.lieuReunion,
    participant:this.props.navigation.state.params.participant,
    sujetReunion:this.props.navigation.state.params.sujetReunion,
    picture:this.props.navigation.state.params.picture,
    key:this.props.navigation.state.params.key
  }

  submit = () =>{
    
    this.props.editReunion(this.state.name,
         this.state.heureReunions, 
         this.state.lieuReunion, 
         this.state.participant, 
         this.state.sujetReunion, 
         this.state.picture, 
         this.state.key);
    this.setState({
        name: "",
        heureReunions: "",
        lieuReunion: "",
        participant: "",
        sujetReunion: "",
        picture: "https://i.pravatar.cc/200?u=a042581f4e2932670",
        key:""
    })

    this.props.navigation.navigate("ListReunions")

  }

    render() {
        console.log('ok',this.props.navigation.params);
        return (
    <View style={styles.container}>
        <Text>update reunions</Text>
        <TextInput style={{marginTop:20, height:40, borderColor:'gray', borderWidth:1}}  onChangeText={name => this.setState({name})} value={this.state.name} />
        <TextInput style={{marginTop:20, height:40, borderColor:'gray', borderWidth:1}}  onChangeText={heureReunions => this.setState({heureReunions})} value={this.state.heureReunions} />
        <TextInput style={{marginTop:20, height:40, borderColor:'gray', borderWidth:1}}  onChangeText={lieuReunion => this.setState({lieuReunion})} value={this.state.lieuReunion} />
        <TextInput style={{marginTop:20, height:40, borderColor:'gray', borderWidth:1}}  onChangeText={participant => this.setState({participant})} value={this.state.participant} />
        <TextInput style={{marginTop:20, height:40, borderColor:'gray', borderWidth:1}}  onChangeText={sujetReunion => this.setState({sujetReunion})} value={this.state.sujetReunion} />
        <TextInput style={{marginTop:20, height:90, borderColor:'gray', borderWidth:1}}  onChangeText={picture => this.setState({picture})} value={this.state.picture} />
     <Button title="Submit" onPress={this.submit} />
    
    </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
         padding:30,
        backgroundColor: '#fff',
    },
});


export default connect(null, {editReunion})(EditReunion);

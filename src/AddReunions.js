import React, { Component } from 'react'
import { View, Text, StyleSheet,TextInput, Button } from 'react-native';
import {postReunions} from '../action'
import {connect} from 'react-redux'
import { Chips, Chip } from 'react-chips-input'
export class AddReunions extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation
        this.state = {
            chips: []
        }
    }
    onChange = chips => {
        this.setState({ chips });
      }
    state={
        name: "",
        heureReunions: "",
        lieuReunion: "",
        participant: "",
        sujetReunion: "",
       // picture: "https://i.pravatar.cc/200?u=a042581f4e2932670"
    }
  submit = () =>{
    this.props.postReunions(this.state.name, this.state.heureReunions, this.state.lieuReunion, this.state.participant,this.state.sujetReunion, this.state.picture)
    this.setState({
        name: "",
        heureReunions: "",
        lieuReunion: "",
        participant: "",
        sujetReunion: "",
       // picture: "https://i.pravatar.cc/200?u=a042581f4e2932670"
    })
    this.props.navigation.navigate('Home');
}

    render() {
        return (
        <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.text_header}>create  meeting now!</Text>
            </View>
            <View >
            <TextInput style={{marginTop:20, height:40, borderColor:'gray', borderWidth:1}} placeholder="name" require onChangeText={name => this.setState({name})} value={this.state.name} />
            </View>
            <View >
            <TextInput style={{marginTop:20, height:90, borderColor:'gray', borderWidth:1}} placeholder="heure du reunion" require onChangeText={heureReunions => this.setState({heureReunions})} value={this.state.heureReunions} />
            </View>
            <View >
            <TextInput style={{marginTop:20, height:90, borderColor:'gray', borderWidth:1}} placeholder="lieu du reunions" require onChangeText={lieuReunion => this.setState({lieuReunion})} value={this.state.lieuReunion} />
            </View>
            <View >
            <TextInput style={{marginTop:20, height:90, borderColor:'gray', borderWidth:1}} placeholder="ajouter participants" require onChangeText={participant => this.setState({participant})} value={this.state.participant} />
            </View>
            <View >
            <TextInput style={{marginTop:20, height:90, borderColor:'gray', borderWidth:1}} placeholder="sujet du reunions" require onChangeText={sujetReunion => this.setState({sujetReunion})} value={this.state.sujetReunion} />
            </View>
            <View>
{/*             <Chips  style={{marginTop:20, height:90, borderColor:'gray', borderWidth:1}} placeholder="ajouter participants" require 
            value={this.state.chips}
            onChange={this.onChange}
           onChange={participant => this.setState({participant})} value={this.state.participant} 
    
            /> */}
            </View>
            <Button
             style={styles.signIn}
             title="Submit" onPress={this.submit} />
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    action: {
        flexDirection: 'row',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        height:100

    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
       // marginTop:20
    },
});

//make this component available to the app
export default connect(null, {postReunions})(AddReunions);
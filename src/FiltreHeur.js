import React, { Component } from 'react'
import Reunions from './Reunions'
export default class FiltreLieu extends Component {
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
                {/*   <FlatList
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
                                <Text style={styles.primaryText}>Reunion A{"-"}{item.lieuReunions}   </Text>
                                <Text note numberOfLines={1}
                                 >{item.participant}  </Text>
                               
                            </View>
                        )
                    }}
                >
                </FlatList> */}
                <FlatList
                    data={this.state.mareu}
                    style={styles.listStyle}
                    renderItem={
                        ({ item }) => <Reunions
                            lieuReunion={item.heureReunion}
                            sujetReunion={item.sujetReunion}
                            participant={item.participant}

                            image_url={item.picture}
                        />
                    }>
                </FlatList>

                <StatusBar style="auto" />
            </View>
        );
    }
}


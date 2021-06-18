import firebase from '../Firebase';

export function getListReunions() {
    return (dispatch) => {
        firebase.database().ref('/mareuapp-65565-default-rtdb').on('value', snapshot => {
            dispatch({
                type: "LISTREUNIONS_FETCH",
                payload: snapshot.val()
            })
        })
    }
}

export function postReunions(name, heureReunions, lieuReunion, participant, sujetReunion) {
    return (dispatch) => {
        firebase.database().ref('/mareuapp-65565-default-rtdb').push({ name, heureReunions, lieuReunion, participant, sujetReunion })
    }
}

export function deleteListReunions(key){
    return (dispatch) => {
        firebase.database().ref(`/mareuapp-65565-default-rtdb/${key}`).remove()
    }
}


export function editReunion(name, heureReunions, lieuReunion, participant, sujetReunion,key){
    return (dispatch) => {
        firebase.database().ref(`/mareuapp-65565-default-rtdb`).child(key).update({name, heureReunions, lieuReunion, participant, sujetReunion})
    }
}

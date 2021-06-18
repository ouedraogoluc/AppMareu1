export default function (state={}, action){
    switch(action.type){
        case "LISTREUNIONS_FETCH":
           // console.log(action.payload);
            return {
                ...state,
                ListReunion:action.payload
            }
        default:
            return state
    }
}
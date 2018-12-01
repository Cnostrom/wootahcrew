const initState = {
  user:[]
 
}

const reducer = (state = initState, actions) => {
    switch(actions.type){
      case "USER":{
        return {...state,user: actions.payload.data}
      }
    
        default: return state
    }

}

export default reducer;
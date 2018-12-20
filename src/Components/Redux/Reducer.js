const initState = {
  user: null,
  postList: [],
  news:[]
}

const reducer = (state = initState, actions) => {
  switch (actions.type) {
    case "USER": {
      return { ...state, user: actions.payload.data }
    }

    case "GET_DATA": {
      return { ...state, postList: actions.payload }
    }

    case "ADD": {
      return { ...state, postList: [...state.postList, actions.payload]}
    }

    case "LOGOUT": {
      return { ...state, user: actions.payload }
    }
    
    case "GET_NEWS": {
      return {...state, news: actions.payload.data.articles}
    }
    
    default: return state
  }
        // case "COMMENT": {
        //   return { ...state, comment: actions.payload}
        // }

}

export default reducer;
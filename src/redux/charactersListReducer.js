

const defaulftState = {
  characters: [],

}

export const charactersListReducer = ( state = defaulftState, action) => {

  switch (action.type) {
    case "ADD_CHARACTERS":
      return  {...state}

    case "GET_CHARACTERS":
     return {...state}
    
    default: 
      return state

  }

}


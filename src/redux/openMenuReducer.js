

const defaulftState = {
    isMenuOpen : false,

}

export const openMenuReducer = (state = defaulftState, action) => {

    switch (action.type) {
      case "TOGGLE_MENU" :
          return {...state, isMenuOpen: !state.isMenuOpen}
     
  
      default:
          return state;
  }
  
  }
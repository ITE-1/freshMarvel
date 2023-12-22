

const defaulftState = {
    isMenuOpen : false,
    isNotificationVisible: true,

}

export const openMenuReducer = (state = defaulftState, action) => {

    switch (action.type) {
      case "TOGGLE_MENU" :
          return {...state, isMenuOpen: !state.isMenuOpen, isNotificationVisible: false};

          case "SHOW_NOTIFICATION":
            return {
              ...state, isNotificationVisible: true,
            };
          case "HIDE_NOTIFICATION":
            return {
                ...state, isNotificationVisible: false,
            };
      default:
          return state;
  }
  
  }
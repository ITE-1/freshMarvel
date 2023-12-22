import { act } from "react-dom/test-utils";
import { connect } from "react-redux";

const defaulftState = {
  users: null,
  isLogged: false,
}
// export const findUserByLoginAndPassword = (login, password) => (state) => {
//   return state.users.find((user) => user.login === login && user.password === password);
// };

export const charactersListReducer = ( state = defaulftState, action) => {

  switch (action.type) {
    case "SET_REGISTER_STATUS":
      return  {...state, isRegister: action.payload,}

    
    case "SET_LOGIN_STATUS":
      return {...state, isLogged: action.payload}

    case "SET_LOGIN": 
      return {...state, users: action.payload, isLogged: true }

    case "SET_LOGOUT":
      return {...state, users: null, isLogged: false}
    default: 
      return state

  }

}


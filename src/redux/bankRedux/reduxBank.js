import { Connect } from "react-redux";

const defaultState = {
    cash: 0,
}

export const bankReducer = (state = defaultState, action) => {

    switch (action.type) {
        case "ADD_CASH":
            return{...state, cash: state.cash + action.payload};
        case "WITHDRAW_CASH":
            return{...state, cash: state.cash - action.payload};

        default :
            return state
    }

}


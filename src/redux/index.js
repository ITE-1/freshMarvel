import { createStore, combineReducers} from "redux";
import { charactersListReducer } from "./charactersListReducer";
import {openMenuReducer} from './openMenuReducer';
import { bankReducer } from "./bankRedux/reduxBank";

const rootReducers = combineReducers({
    isMenuOpen: openMenuReducer,
    isNotificationVisible: openMenuReducer,
    characters: charactersListReducer,
    counter: bankReducer
})

export const store = createStore(rootReducers);
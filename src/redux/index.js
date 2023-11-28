import { createStore, combineReducers} from "redux";
import { charactersListReducer } from "./charactersListReducer";
import {openMenuReducer} from './openMenuReducer';

const rootReducers = combineReducers({
    isMenuOpen: openMenuReducer,
    characters: charactersListReducer,
})

export const store = createStore(rootReducers);
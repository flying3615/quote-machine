import { combineReducers } from "redux";
import { quote, changeColor } from './quoteReducer'


export default combineReducers({
    quote, changeColor
})
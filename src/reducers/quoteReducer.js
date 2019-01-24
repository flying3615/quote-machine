import { FETCH_QUOTE, CHANGE_COLOR} from '../actions/quoteActions'

export function quote(state = {}, action) {
    switch(action.type) {
        case FETCH_QUOTE:
            return {message: action.payload}
        default:
            return state
    }
}

export function changeColor(state = {}, action) {
    switch(action.type) {
        case CHANGE_COLOR:
            return {color: action.payload}
        default:
            return state
    }
}
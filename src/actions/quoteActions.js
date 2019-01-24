import { dispatch } from "rxjs/internal/observable/pairs";

export const FETCH_QUOTE = 'FETCH_QUOTE'
export const CHANGE_COLOR = 'CHANGE_COLOR'

//asynch action maker
export const fetchQuote = dispatch => {
    fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: FETCH_QUOTE,
                payload: data.message
            })
            dispatch(changeColor())
        })
}

export const changeColor = () => {
    return ({
        type: CHANGE_COLOR,
        payload: _randomColor()
    })
}

const _randomColor = ()=>{
    return '#' + '0123456789abcdef'.split('').map(function (v, i, a) {
        return i > 5 ? null : a[Math.floor(Math.random() * 16)]
    }).join('');
}
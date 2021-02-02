/* eslint-disable import/no-anonymous-default-export */
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionType'
const defaultStatus = {
    inputValue: 'write Something',
    list: [
        '早起锻炼',
        '中午午休',
    ]
};

export default ((state = defaultStatus, action) => {
    console.log('state, action', state, action);
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state)) // 深拷贝state
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    }
    return state
})
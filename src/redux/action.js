import {ADD_BOOKS,USER_CHECK, LOGOUT} from './actionType'

export const add_books=(payload)=>{
    return{
        type:ADD_BOOKS,
        payload
    }
}
export const user_check=payload=>{
    return{
        type: USER_CHECK,
        payload
    }
}
export const user_logout=payload=>{
    return{
        type: LOGOUT,
        payload
    }
}
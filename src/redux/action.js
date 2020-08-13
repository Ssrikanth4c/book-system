import {ADD_BOOKS} from './actionType'

export const add_books=(payload)=>{
    return{
        type:ADD_BOOKS,
        payload
    }
}
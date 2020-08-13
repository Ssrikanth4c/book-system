import {ADD_BOOKS,USER_CHECK} from './actionType'
import data from '../data.json'
const initState={
    data:data,
    bookList:[],
    isAuth:false,
    users:[
        {
            userName:'sree',
            password: 'sree'
        },
        {
            userName:'1220',
            password: '1220'
        }
    ],
    login_user:''
}

const reducer=(state=initState,{type, payload})=>{
    switch(type){
        case ADD_BOOKS:
            return{
                ...state, bookList:[...state.bookList,payload]
            }
        case USER_CHECK:
            let flag=false, user=state.users
            user.forEach(user=>{
                if(user.userName === payload.username && user.password === payload.password){
                    flag=true;
                    state.login_user= user.userName
                }
            })
            if(flag) state.isAuth=true
            return{
                ...state
            }
        default:
            return {... state}
    }
}

export default reducer;
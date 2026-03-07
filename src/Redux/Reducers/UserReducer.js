
import { CURRENTUSER, FAIL, GETALLUSERS, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/UserTypes"

const initialState={
    user:{},
    errors:[],
    users:[]
}
const UserReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FAIL: return {...state, errors:action.payload}
        case REGISTER: 
         localStorage.setItem("token", action.payload.token)
         return {...state, user:action.payload.account,errors:[]}
         case LOGIN:
          localStorage.setItem("token", action.payload.token)
          return {...state, user:action.payload.found,errors:[]}
          case CURRENTUSER:return{...state, user:action.payload}
          case LOGOUT: 
          localStorage.removeItem('token')
          return {...state, user:{},errors:[]}
          case GETALLUSERS: return {...state,users:action.payload}
          
 

    
    default:return state

    }
}

export default UserReducer
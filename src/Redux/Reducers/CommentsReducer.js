import { GETALLCOMMENTS, GETCOMMENTSBYUSER, GETONECOMMENT } from "../ActionTypes/CommentsTypes"
import { FAIL } from "../ActionTypes/UserTypes"


const initialState={
     comments:[],
     oneComment:{},
     commentsUser:[]
}

const CommentsReducer=(state=initialState, action)=>{
   switch (action.type) {
     case FAIL: return {...state, errors:action.payload}
     case GETALLCOMMENTS: return{...state, comments: action.payload}
     case GETONECOMMENT : return {...state,oneComment:action.payload}
     case GETCOMMENTSBYUSER: return {...state, commentsUser: action.payload}
    default: return state

   }
}

export default CommentsReducer
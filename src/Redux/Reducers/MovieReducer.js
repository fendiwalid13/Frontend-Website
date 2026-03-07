import { GETALLMOVIES, GETMOVIESBYUSER, GETONEMOVIE } from "../ActionTypes/MovieTypes"
import { FAIL } from "../ActionTypes/UserTypes"

const initialState={
    movies:[],
    onemovie:{},
    moviesUser:[]
}

const MovieReducer=(state=initialState, action)=>{
   switch (action.type) {
    case FAIL: return {...state, errors:action.payload}
    case GETALLMOVIES: return {...state, movies:action.payload}
    case GETONEMOVIE: return{...state,onemovie:action.payload }
    case GETMOVIESBYUSER: return {...state, moviesUser: action.payload}
    default: return state

   }
}

export default MovieReducer
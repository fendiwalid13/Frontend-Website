import { GETALLRATES, GETONERATE, GETRATESBYMOVIE } from "../ActionTypes/RateTypes"

const initialState={
    oneRate:{},
    rates:[]
}

const RateReducer=(state=initialState, action)=>{
    switch (action.type) {
        case GETALLRATES: return {...state, rates: action.payload}
        case GETRATESBYMOVIE: return {...state, rates: action.payload}
        case GETONERATE: return {...state, oneRate:action.payload}
        default:return state
    }
}

export default RateReducer
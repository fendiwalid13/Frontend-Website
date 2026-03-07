import {combineReducers} from 'redux'
import UserReducer from './UserReducer'
import ErrorReducer from './ErrorReducer'
import MovieReducer from './MovieReducer'
import CommentsReducer from './CommentsReducer'
import RateReducer from './RateReducer'

const rootReducer= combineReducers({UserReducer, ErrorReducer,MovieReducer,CommentsReducer, RateReducer})
export default rootReducer
import {combineReducers} from 'redux'
import ProfileReducer from './Profile/ProfileReducer';

var RootReducer = combineReducers({
    profiles: ProfileReducer
})

export default RootReducer;
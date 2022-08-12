import { combineReducers } from 'redux'
import HomeReducer from './Container/Home/Reducer'
import SiteReducer from './Container/Site/Reducer'
const Reducer = combineReducers({
    HomeReducer  ,
    SiteReducer
})

export default Reducer
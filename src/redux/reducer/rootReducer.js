import { combineReducers } from 'redux'
//the children of root
import counterReducer from './counterReducer'

const rootReducer = combineReducers({
  counter: counterReducer
})

export default rootReducer

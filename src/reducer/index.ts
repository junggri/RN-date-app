import {combineReducers} from "redux";
import {place} from './Place'


const rootReducer = combineReducers({
  place
})


export default rootReducer

export type RootState = ReturnType<typeof rootReducer>

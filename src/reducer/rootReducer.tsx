import {combineReducers} from "redux";
import addressReducer from "./addressReducer";
import { shelterReducer } from "./shelterReducer";
import tokenSlice from "./tokenSlice";

const rootReducer = combineReducers({
  authToken : tokenSlice,
  address : addressReducer,
  shelter: shelterReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
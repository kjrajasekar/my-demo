import { combineReducers } from "redux";
import myreducer from "./myreducer";


const allreducer=combineReducers({
   counts:myreducer
})
export default allreducer
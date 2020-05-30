import { combineReducers } from "redux";
import interviewsReducer from "./interviewsReducer";
import interviewReducer from "./interviewReducer";

const rootReducer = combineReducers({
  interviews: interviewsReducer,
  interview: interviewReducer,
});

export default rootReducer;

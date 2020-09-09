import { combineReducers } from "redux";
import interviewsReducer from "./interviewsReducer";
import interviewReducer from "./interviewReducer";

const rootReducer = combineReducers({
  interviews: interviewsReducer,
  showInterview: interviewReducer,
});

export default rootReducer;

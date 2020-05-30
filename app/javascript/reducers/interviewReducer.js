import * as actions from "../actions/interviewActions";

export const initialState = {
  interview: {},
  loading: true,
  hasErrors: false
};

export default function interviewReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case actions.GET_INTERVIEW:
      return { ...state, loading: true };
    case actions.GET_INTERVIEW_SUCCESS:
      return { interview: action.payload, loading: false, hasErrors: false };
    case actions.GET_INTERVIEW_FAILURE:
      return { ...state, loading: false, hasErrors:true };
    default:
      return state;
  }
}

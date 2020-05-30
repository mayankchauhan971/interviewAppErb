import * as actions from "../actions/interviewActions";

export const initialState = {
  interview: {},
};

export default function interviewReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case actions.GET_INTERVIEW_SUCCESS:
      return { interview: action.payload, loading: false, hasErrors: false };
    default:
      return state;
  }
}

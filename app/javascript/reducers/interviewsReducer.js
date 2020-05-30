import * as actions from "../actions/interviewsActions";

export const initialState = {
  interviews: [],
  loading: true,
  hasErrors: false
};

export default function interviewsReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case actions.GET_INTERVIEWS:
      return { ...state, loading: true };
    case actions.GET_INTERVIEWS_SUCCESS:
      return { interviews: action.payload, loading: false, hasErrors: false };
    case actions.GET_INTERVIEWS_FAILURE:
      return { ...state, hasErrors: false };
    default:
      return state;
  }
}

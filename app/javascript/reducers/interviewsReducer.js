import * as actions from "../actions/interviewsActions";

export const initialState = {
  interviews: [],
};

export default function interviewsReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case actions.GET_INTERVIEWS_SUCCESS:
      return { interviews: action.payload, loading: false, hasErrors: false };
    default:
      return state;
  }
}

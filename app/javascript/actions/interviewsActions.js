// ACTION TYPES
export const GET_INTERVIEWS = "GET INTERVIEWS";
export const GET_INTERVIEWS_SUCCESS = "GET_INTERVIEWS_SUCCESS";
export const GET_INTERVIEWS_FAILURE = "GET_INTERVIEWS_FAILURE";

// RETURN ACTIONS
export const getInterviews = () => ({
  type: GET_INTERVIEWS,
});

export const getInterviewsSuccess = (interviews) => ({
  type: GET_INTERVIEWS_SUCCESS,
  payload: interviews,
});

export const getInterviewsFailure = () => ({
  type: GET_INTERVIEWS_FAILURE,
});

// THUNK BECAUSE ASYNC FETCH
export function fetchInterviews() {
  return async (dispatch) => {
    dispatch(getInterviews());

    try {
      const res = await fetch(
        `http://localhost:3000/home`
      );
      const data = await res.json();
      console.log(data);
      dispatch(getInterviewsSuccess(data));
    } catch (error) {
      dispatch(getInterviewsFailure());
      console.log(error);
    }
  };
}

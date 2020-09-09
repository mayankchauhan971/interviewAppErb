// ACTION TYPES
export const GET_INTERVIEWS_SUCCESS = "GET_INTERVIEWS_SUCCESS";

// RETURN ACTIONS
export const getInterviewsSuccess = (interviews) => ({
  type: GET_INTERVIEWS_SUCCESS,
  payload: interviews,
});


// THUNK BECAUSE ASYNC FETCH
export function fetchInterviews() {
  return async (dispatch) => {

    try {
      const res = await fetch(
        `http://localhost:3000/home`
      );
      const data = await res.json();
      console.log(data);
      dispatch(getInterviewsSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
}

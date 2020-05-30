// ACTION TYPES
export const GET_INTERVIEW = "GET INTERVIEW";
export const GET_INTERVIEW_SUCCESS = "GET_INTERVIEW_SUCCESS";
export const GET_INTERVIEW_FAILURE = "GET_INTERVIEW_FAILURE";

// RETURN ACTIONS
export const getInterview = ()=> ({
  type: GET_INTERVIEW
})

export const getInterviewSuccess = (interview) => ({
  type: GET_INTERVIEW_SUCCESS,
  payload: interview,
});

export const getInterviewFailure = () => ({
  type: GET_INTERVIEW_FAILURE,
});

// THUNK BECAUSE ASYNC FETCH
export function fetchInterview(interviewId) {
  return async (dispatch) => {
    dispatch(getInterview());
    
    try {
      const res = await fetch(
        `http://localhost:3000/interviews/${interviewId}`
        );
        const data = await res.json();
        
        dispatch(getInterviewSuccess(data));
      } catch (error) {
        dispatch(getInterviewFailure());
      }
    };
  }
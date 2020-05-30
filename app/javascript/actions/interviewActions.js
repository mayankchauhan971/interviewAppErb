// ACTION TYPES
export const GET_INTERVIEW_SUCCESS = "GET_INTERVIEW_SUCCESS";

// RETURN ACTIONS

export const getInterviewSuccess = (interview) => ({
  type: GET_INTERVIEW_SUCCESS,
  payload: interview,
});


// THUNK BECAUSE ASYNC FETCH
export function fetchInterview(interviewId) {
  return async (dispatch) => {
    
    try {
      const res = await fetch(
        `http://localhost:3000/interviews/${interviewId}`
        );
        const data = await res.json();
        
        dispatch(getInterviewSuccess(data));
      } catch (error) {
        console.log(error);
      }
    };
  }
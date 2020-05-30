import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import RenderInterview from './RenderInterview'
import { fetchInterview } from "../actions/interviewActions";


const Show = (props)=> {

  const { dispatch, loading, interview, hasErrors, participants } = props;
  const { match: { params: { id } } } = props;

  useEffect(() => {
    dispatch(fetchInterview(id))
  }, [dispatch])
  
  // console.log(interview);
  // console.log(participants);

  return (
    <div>
      
      {interview.interview && <RenderInterview interview={interview} />}
      <Link to={`/interview/${props.match.params.id}/edit`}>Edit</Link>
      <Link to="/"> Home</Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.showInterview.loading,
  interview: state.showInterview.interview,
  hasErrors: state.showInterview.hasErrors,
  participants: state.showInterview.participants
});

export default connect(mapStateToProps)(Show);
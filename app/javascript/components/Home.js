import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import { fetchInterviews } from "../actions/interviewsActions";

const Home = (props)=> {

  console.log(props)
  const {dispatch, loading, interviews, hasErrors} = props;

  useEffect(()=>{
    dispatch(fetchInterviews())
  }, [dispatch])

  const renderInterviews = ()=>{
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
  }  

  return (
    <div>
      {console.log(interviews)}
      {interviews.map((interview) => (
        <div>
          <h3>{interview.title}</h3>
          <p>Date: {interview.start.split("T")[0]}</p>
          <p>Start: {interview.start.split("T")[1].slice(0, 5)}</p>
          <p>End: {interview.end.split("T")[1].slice(0, 5)}</p>
          <Link to={`/interview/${interview.id}`}>Show</Link>
          <Link to={`/interview/${interview.id}/edit`}>Edit</Link>
        </div>
      )
    )}
      <Link to="/interview/new">Add Interview</Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.interviews.loading,
  interviews: state.interviews.interviews,
  hasErrors: state.interviews.hasErrors,
});

export default connect(mapStateToProps)(Home);
import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchInterviews } from "../actions/interviewsActions";
import RenderInterviews from './RenderInterviews'

const Home = (props)=> {

  const {dispatch, interviews} = props;

  useEffect(()=>{
    dispatch(fetchInterviews())
  }, [])

  
  return (
    <div>
      <RenderInterviews
        interviews={interviews}
      />
      <Link to="/interview/new">Add Interview</Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  interviews: state.interviews.interviews,
});

export default connect(mapStateToProps)(Home);
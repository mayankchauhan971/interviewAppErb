import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import { connect } from "react-redux";

import { fetchInterview } from "../actions/interviewActions";


const Show = (props)=> {

  const { dispatch, loading, interview, hasErrors, participants } = props;
  const { match: { params: { id } } } = props;

  useEffect(() => {
    dispatch(fetchInterview(id))
  }, [dispatch])

  const renderInterview = ()=>{
    // if (loading) return <p>Loading details of interview...</p>;
    // if (hasErrors) return <p>Unable to display details of interview.</p>;
    return interview ? (
        <div>
          <h3>{interview.title}</h3>
          <p>Date: {interview.start.split("T")[0]}</p>
          <p>Start: {interview.start.split("T")[1].slice(0, 5)}</p>
          <p>End: {interview.end.split("T")[1].slice(0, 5)}</p>
          <div>
            <h4>Participants</h4>
            <div>
              {participants
                .map((participant) => (
                  <div>
                      {participant.email} ||
                      <a href="{participant.resume}" download>
                        {" "}
                        Download Resume{" "}
                      </a>;
                  </div>
                ))
                .join("\n ")}
            </div>
          </div>
        </div>) : null
  }
  
  // show ? show.interview.start : " "
  return (
    <div>
      {renderInterview()}
      <Link to={`/interview/${props.match.params.id}/edit`}>Edit</Link>
      <Link to="/"> Home</Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.interview.loading,
  interview: state.interview.interview,
  hasErrors: state.interview.hasErrors,
  participants: state.interview.participants
});

export default connect(mapStateToProps)(Show);
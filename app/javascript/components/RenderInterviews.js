import React from 'react'
import { Link } from "react-router-dom";

const RenderInterviews = (props)=>{
  const interviews = props.interviews;
  
  return (
    <div>
      {interviews.map((interview) => (
        <div>
          <h3>{interview.title}</h3>
          <p>Date: {interview.start.split("T")[0]}</p>
          <p>Start: {interview.start.split("T")[1].slice(0, 5)}</p>
          <p>End: {interview.end.split("T")[1].slice(0, 5)}</p>
          <Link to={`/interview/${interview.id}`}>Show</Link>
          <Link to={`/interview/${interview.id}/edit`}>Edit</Link>
        </div>
      ))}
    </div>
  );
}

export default RenderInterviews;
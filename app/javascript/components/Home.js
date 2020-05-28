import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const Home = ()=> {

  const [interviews, setInterviews] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/home")
      .then(res => res.json())
      .then(interview => {setInterviews(interview)})
  }, [])
  return (
    <div>
      {interviews.length > 0 ? (
        interviews.map((interview) => (
          <div>
            <h3>{interview.title}</h3>
            <p>Date: {interview.start.split("T")[0]}</p>
            <p>Start: {interview.start.split("T")[1].slice(0, 5)}</p>
            <p>End: {interview.end.split("T")[1].slice(0, 5)}</p>
            <Link to={`/interview/${interview.id}`}>Show</Link>
            <Link to={`/interview/${interview.id}/edit`}>Edit</Link>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/interview/new">Add Interview</Link>
    </div>
  );
}

export default Home;
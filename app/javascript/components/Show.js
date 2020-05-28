import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"

const Show = (props)=> {

  const [show, setShow] = useState();
  
  useEffect(()=>{
    fetch(`http://localhost:3000/interviews/${props.match.params.id}`)
      .then(res => res.json())
      .then(data => {setShow(data)})
  }, [])
  
  // show ? show.interview.start : " "
  return (
    <div>
      {!show ? (
        ""
      ) : (
        <div>
          <h3>{show.interview.title}</h3>
          <p>Date: {show.interview.start.split("T")[0]}</p>
          <p>Start: {show.interview.start.split("T")[1].slice(0, 5)}</p>
          <p>End: {show.interview.end.split("T")[1].slice(0, 5)}</p>
          <div>
            <h4>Participants</h4>
            <div>
              {show.participants
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
          <Link to={`/interview/${props.match.params.id}/edit`}>Edit</Link>
          <Link to="/"> Home</Link>
        </div>
      )}
    </div>
  );
}

export default Show;
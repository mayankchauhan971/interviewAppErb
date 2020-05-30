import React from 'react'

const renderInterview = (props) => {

  const { interview, participants } = props.interview;
  console.log(props.interview)

  return Object.keys(interview).length !== 0 ? (
    <div>
      <h3>{interview.title}</h3>
      <p>Date: {interview.start.split("T")[0]}</p>
      <p>Start: {interview.start.split("T")[1].slice(0, 5)}</p>
      <p>End: {interview.end.split("T")[1].slice(0, 5)}</p>
      <div>
        <h4>Participants</h4>
        <div>
          {participants.map((participant) => (
              <div>
                {participant.email} ||
                <a href="{participant.resume}" download>
                  {" "}
                  Download Resume{" "}
                </a>
                ;
              </div>
            ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default renderInterview;
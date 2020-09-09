import React from 'react'

const Form = ()=>{
  return (
    <div>
      <div className="field">
        <p>Title</p>
        <input className="input" id="title" placeholder="Enter Title" />
      </div>
      <div className="field">
        <p>Start Time</p>
        <input
          type="datetime-local"
          id="start"
          placeholder="Enter Start Time"
        />
      </div>
      <div className="field">
        <p>End Time</p>
        <input type="datetime-local" id="end" placeholder="Enter End Time" />
      </div>
      <div className="field">
        <p>Enter Participants</p>
        <input
          className="input"
          id="p-email"
          placeholder="Enter Participants"
        />
      </div>
      <div className="field">
        <p>Enter Roles</p>
        <input className="input" id="p-role" placeholder="Enter Roles" />
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default FormData;
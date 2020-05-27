import React from "react";

class New extends React.Component {
  render() {
    return (
      <section>
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
          <input
            type="datetime-local"
            id="end"
            placeholder="Enter End Time"
          />
        </div>
        <div class="field">
          <p>Enter Participants</p>
          <input class="input" id="p-email" placeholder="Enter Participants" />
        </div>
        <div class="field">
          <p>Enter Roles</p>
          <input class="input" id="p-role" placeholder="Enter Roles" />
        </div>
        <div>
          <a onclick="window.location.href= '/#/';">Home</a>
        </div>
      </section>
    );
  }
}

export default New;
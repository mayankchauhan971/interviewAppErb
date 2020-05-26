import Util from '../services/Util'
console.log("show.js loaded")

let getInterview = async (id) => {
  const req = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(`http://localhost:3000/interviews/` + id, req)
    const json = await res.json();
    console.log(json);
    return json;
  } catch (err) {
    console.log(err);
  }
};  

let Show = {
  render: async () => {
    let req = Util.parseRequestURL();
    let res = await getInterview(req.id);
    let interview = res.interview;
    let participants = res.participants;
    let view = `
      <div>
        <p>Title: ${interview.title}</p>
        <p>Date: ${interview.start.split("T")[0]}</p>
        <p>Start Time: ${interview.start.split("T")[1].slice(0, 5)}</p>
        <p>End Time: ${interview.end.split("T")[1].slice(0, 5)}</p>
        <div>
          <h4>Participants</h4>
          ${participants
            .map(
              (participant) => `
              <p>
                ${participant.email} ||
                <a href = "${participant.resume}" download> Download Resume </a>
              </p>
          `
            )
            .join("\n ")}
        </div>
        <div>
          <a onclick = "window.location.href= '/#/interviews/${
            interview.id
          }/Edit'">Edit</a>
          <a onclick = "window.location.href= '/#/interviews/${
            interview.id
          }/delete'">Delete</a>
          <a onclick = "window.location.href= '/'">Home</a>
        </div>
      </div>
    `;
    return view;
  },
  after_render: async () => {},
};

export default Show;
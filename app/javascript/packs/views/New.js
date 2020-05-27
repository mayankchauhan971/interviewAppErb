let create = async (interview, participants) => {
  let data = {
    start: interview.start, 
    end: interview.end, 
    title: interview.title, 
    pemail: participants.emails, 
    position: participants.roles
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const res = await fetch(`http://localhost:3000/interviews`, options);
    alert("Interview Created");
    location.hash = "/";
  } catch (err) {
    console.log(err);
  }
};

const New = {
  render: async () => {
    let view = `
      <section>
        <div class="field">
          Title
          <input class="input" id="title" placeholder="Enter Title">
        </div>
        <div class = "field">
          Start Time:
          <input type="datetime-local" class="input" id="start"  placeholder="Enter Start Time">
        </div>
        <div class="field">
          End time:
          <input type="datetime-local" id="end"  placeholder="Enter End time">
        </div>
        <div class="field">      
          Enter Participants:
          <input class="input"  id="p-email"  placeholder="Enter Participants">
        </div>
        <div class="field">      
          Enter Roles:
          <input class="input"  id="p-role"  placeholder="Enter Roles">
        </div>
        <div class="field" id = "btn">
          <button>Add New Interview</button>
        </div>
        <div>
          <a onclick = "window.location.href= '/#/';">Home</a>
        </div>
      </section>
    `;
    return view;
  },
  after_render: async () => {
    document.getElementById("btn").addEventListener("click", () => {
      let title = document.getElementById("title");
      let start = document.getElementById("start");
      let end = document.getElementById("end");
      let emails = document.getElementById("p-email");
      let roles = document.getElementById("p-role");
      let interview = {
        start: start.value,
        end: end.value,
        title: title.value
      };
      let participants = {
        emails: emails.value,
        roles: roles.value
      }
      create(interview, participants);
    });
  },
};

export default New
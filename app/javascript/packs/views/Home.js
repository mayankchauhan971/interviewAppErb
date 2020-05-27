let getInterviews = async () => {
  const req = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(`http://localhost:3000/home`, req);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
};

let Home = {
  render: async () => {
    let interviews = await getInterviews();
    let view = `
            <section class="section">
                <h1> All Interviews </h1>
                <table>
                    <tr>
                      <th>Title</th>
                      <th>Date</th>
                      <th>Start Time</th>
                      <th>End Time</th>
                    </tr>
                    ${interviews
                      .map(
                        (interview) =>
                          `
                          <tr>
                            <td> ${interview.title} </td>
                            <td> ${
                              interview.start.split("T")[0]
                            } </td>                            
                            <td> ${interview.start
                              .split("T")[1]
                              .slice(0, 5)} </td>
                            <td> ${interview.end
                              .split("T")[1]
                              .slice(0, 5)} </td>
                            <td><a onclick = "window.location.href= '/#/interviews/${
                              interview.id
                            }'">Show</a></td>
                            <td><a onclick = "window.location.href= '/#/interviews/${
                              interview.id
                            }/Edit'">Edit</a></td>
                          </tr>
                          `
                      )
                      .join("\n ")}
                </table>
                <a onclick = "window.location.href= '/#/interviews/new'" >
                New interview
                </a>
            </section>
        `;
    return view;
  },
  after_render: async () => {},
};

export default Home
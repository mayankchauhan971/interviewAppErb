import React, {useState, useEffect} from "react";
import Form from "./Form";
import { Link } from "react-router-dom";

const New = ()=> {

  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [title, setTitle] = useState();
  const [pemail, setPemail] = useState();
  const [position, setPosition] = useState();


  const handleSubmit = (e) =>{
    e.preventDefault();

    let data = {
      start: start,
      end: end,
      title: title,
      pemail: pemail,
      position: position,
    };

    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelectorAll("meta")[1].content,
      },
      body: JSON.stringify(data),
    };

    fetch(`http://localhost:3000/interviews`, req).then((res) => res.json());

    console.log("submitted form")
  };

  return (
    <form onSubmit = {handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Start:
        <input
          type="datetime-local"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
      </label>
      <label>
        End:
        <input
          type="datetime-local"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
      </label>
      <label>
        Enter Participant's Email
        <input
          type="text"
          value={pemail}
          onChange={(e) => setPemail(e.target.value)}
        />
      </label>
      <label>
        Enter Participant's Role
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default New;
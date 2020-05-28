import React, {useState, useEffect} from "react";
import Form from "./Form";
import { Link } from "react-router-dom";

const New = ()=> {

  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [title, setTitle] = useState();
  const [pemail, setPemail] = useState();
  const [position, setPosition] = useState();
  const [interviewId, setInterviewId] = useState();

  const req = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(`http://localhost:3000/interviews`, req)
    .then(res => res.json())
    .then(data)

  return <Form />;
}

export default New;
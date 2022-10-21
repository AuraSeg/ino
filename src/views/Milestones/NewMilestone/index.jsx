import React, { Fragment, useState } from "react";
import Axios from "axios";

const initialState = {
  team: 1,
  title: "",
  description: "",
  due_date: "",
  // memberIds: "",
};

export default function NewMilestone() {
  //const url = "https://jsonplaceholder.typicode.com/posts";
  const url = "https://performance-task-ino.herokuapp.com/milestones/create";  
  const [milestone, setMilestone] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handle = (e) => {
    const { id, value } = e.target;
    setMilestone({
      ...milestone,
      [id]: value,
    });
  };

  const restart = () => {
    setTimeout(() => {
      setError(null);
      setSuccess(false);
      setMilestone(initialState);
    }, 2000);
  };

  async function submit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await Axios.post(url, milestone);
      setLoading(false);
      setSuccess(true);
      restart();
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  }

  return (
    <div>
      <Fragment>
        <h3>New Milestone</h3>
        <form onSubmit={(e) => submit(e)}>
          <label className="formlabel">Title</label>
          <input
            className="form-control my-2"
            onChange={handle}
            id="title"
            value={milestone.title}
            placeholder="Title"
            type="text"
          ></input>
          <label className="formlabel">Description</label>
          <textarea
            className="form-control my-2"
            rows="3"
            onChange={(e) => handle(e)}
            id="description"
            value={milestone.description}
            placeholder="Description"
            type="text"
          ></textarea>
          <label className="formlabel">Due date</label>
          <input
            className="form-control my-2"
            onChange={(e) => handle(e)}
            id="due_date"
            value={milestone.due_date}
            placeholder="Due date"
            type="date"
          ></input>
          {/* <label className="formlabel">Add team members</label>
          <input
            className="form-control my-2"
            list="datalistOptions"
            onChange={(e) => handle(e)}
            id="memberIds"
            value={milestone.memberIds}
            placeholder="Type to search..."
          />
          <datalist id="datalistOptions">
            {arrayPeople.map((item) => {
              return <option value={item.name}>{item.name}</option>;
            })}
          </datalist> */}
          <button className="btn btn-info">
            {loading ? "Loading..." : "Add"}
          </button>
          {error && <div>An error has occurred</div>}
          {success && <div>Successful</div>}
        </form>
      </Fragment>
    </div>
  );
}

const arrayPeople = [
  {
    id: 1,
    name: "Andrea",
  },
  {
    id: 2,
    name: "John",
  },
  {
    id: 3,
    name: "Sam",
  },
];

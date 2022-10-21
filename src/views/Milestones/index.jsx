import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router";

export default function Milestones() {
  const [milestones, setMilestones] = useState([]);
  const navigate = useNavigate();

  const getMilestones = async () => {
    try {
      const { data } = await axios.get(
        "https://performance-task-ino.herokuapp.com/milestones/"
      );
      setMilestones(data);
    } catch (error) {}
  };

  useEffect(() => {
    getMilestones();
  }, []);

  const getDay = (date) => {
    const d = new Date(date);
    return moment(d).format("D");
  };

  const getMonth = (date) => {
    const d = new Date(date);
    return moment(d).format("MMM");
  };

  return (
    <div>
      <h3>Milestones</h3>
      <div className="content">
        {milestones.map((item) => (
          <div className="milestone-title" key={item.id}>
            <div>
              <span className="date">
                <span className="date-month">{getMonth(item.due_date)}</span>
                <span className="date-day">{getDay(item.due_date)}</span>
              </span>
            </div>
            <span className="milestone">{item.title}</span>
          </div>
        ))}
      </div>
      <button
        className="button-add"
        onClick={() => {
          navigate("/milestones/create");
        }}
      >
        +
      </button>
    </div>
  );
}

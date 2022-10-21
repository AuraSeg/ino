import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import moment from "moment";

export default function Milestone() {
  const [milestone, setMilestone] = useState([]);
  const param = useParams();
  const WAIT_TIME = 5000;

  const getMilestone = async () => {
    try {
      const { data } = await axios.get(
        "https://performance-task-ino.herokuapp.com/milestones/" + param.id
      );
      setMilestone(data);
      WAIT_TIME();
    } catch (error) {}
  };

  useEffect(() => {
    getMilestone(param.id);
  }, [milestone]);

  const getDay = (date) => {
    const d = new Date(date);
    return moment(d).format("D");
  };

  const getMonth = (date) => {
    const d = new Date(date);
    return moment(d).format("MMM");
  };

  if (!milestone) return null;

  return (
    <div>
      <h3>Milestone</h3>
      <div className="content">
        <div className="milestone-title">
          <div>
            <span className="date">
              <span className="date-month">{getMonth(milestone.due_date)}</span>
              <span className="date-day">{getDay(milestone.due_date)}</span>
            </span>
          </div>
          <span className="milestone">{milestone.title}</span>
        </div>
        <span className="milestone">{milestone.description}</span>
      </div>
    </div>
  );
}

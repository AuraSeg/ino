import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import moment from "moment";

export default function Milestone() {
  const [milestone, setMilestone] = useState([]);
  const [status, setStatus] = useState(false);
  const param = useParams();
  const url = "https://performance-task-ino.herokuapp.com/milestones/";
  const WAIT_TIME = 5000;

  const getMilestone = async () => {
    try {
      const { data } = await axios.get(
        url + param.id
      );
      setMilestone(data);
      WAIT_TIME();
      console.log(status);
    } catch (error) {}
  };

  useEffect(() => {
    getMilestone(param.id);
  }, [milestone]);

  async function changeStatus() {
    try {
      const { data } = await axios.put(
        url + param.id,
        {
          team: 1,
          title: param.title,
          description: param.description,
          due_date: param.due_date,
          completion_status: true
        }
      );
      setMilestone(data);
      setStatus(true);
      console.log(param.completion_status);
    } catch (error) {}
  }

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
    <div className="space">
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
        <span className="milestone">
          {milestone.description}
          {milestone.completion_status}
        </span>
      </div>
      <div className="space">
        <button
          type="button"
          class="btn btn-success"
          value={milestone.completion_status}
          style={{ backgroundColor: status ? "rgb(29, 41, 81, 1)" : "" }}
          onClick={() => {
            changeStatus();
          }}
        >
          Complete
        </button>
      </div>
    </div>
  );
}

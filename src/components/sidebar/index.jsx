import React from "react";
import { useNavigate } from "react-router";
import bulb from './icon/icon.png';

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <img src={bulb} className="icon" alt="bottom" />
      <span className="sidebar_button" onClick={() => navigate("/dashboard")}>Dashboard</span>
      <span className="sidebar_button" onClick={() => navigate("/milestones")}>Milestones</span>
    </div>
  );
}
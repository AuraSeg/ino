import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import bulb from "./icon/icon.png";

export default function Sidebar() {
  const navigate = useNavigate();

  let location = useLocation();

  const activeTab = useMemo(() => {
    return location.pathname.split("/")[1]
  }, [location])

  return (
    <div className="sidebar">
      <img src={bulb} className="icon" alt="bottom" />
      <span
        className="sidebar_button"
        style={{ backgroundColor: activeTab==="dashboard" && "rgb(29, 41, 81, 1)" }}
        onClick={() => {
          navigate("/dashboard")
        }}
      >
        Dashboard
      </span>
      <span
        className="sidebar_button"
        style={{ backgroundColor: activeTab==="milestones" && "rgb(29, 41, 81, 1)"}}
        onClick={() => {
          navigate("/milestones")
        }}
      >
        Milestones
      </span>
    </div>
  );
}

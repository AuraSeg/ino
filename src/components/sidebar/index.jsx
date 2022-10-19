import React, {useState} from "react";
import { useNavigate } from "react-router";
import bulb from './icon/icon.png';

export default function Sidebar() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
  };

  return (
    <div className="sidebar">
      <img src={bulb} className="icon" alt="bottom" />
      <span className="sidebar_button" style={{backgroundColor: !isActive ? 'rgb(29, 41, 81, 1)' : ''}} onClick={() => {navigate("/dashboard"); handleClick();}}>Dashboard</span>
      <span className="sidebar_button" style={{backgroundColor: isActive ? 'rgb(29, 41, 81, 1)' : ''}} onClick={() => {navigate("/milestones"); handleClick();}}>Milestones</span>
    </div>
  );
}
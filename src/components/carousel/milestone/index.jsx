import React from "react";

export default function Milestone({ date = "", description = "" }) {
  return (
    <div>
      <span>{date}</span>
      <span>{description}</span>
    </div>
  );
}
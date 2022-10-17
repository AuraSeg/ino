import React from "react";
import { Route, Routes } from "react-router";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Dashboard from "../Dashboard";
import Milestones from "../Milestones";

export default function Desktop() {
  return (
    <div className="desktop">
      <Sidebar />
      <div className="dashboard">
        <Header />
        <div >
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/milestones" element={<Milestones/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
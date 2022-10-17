import React from "react";
import { Route, Routes } from "react-router";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Dashboard from "../Dashboard";

export default function Desktop() {
  return (
    <div className="desktop">
      <Sidebar />
      <div className="dashboard">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/milestones" element={<div>milestones</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
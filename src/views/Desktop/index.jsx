import React from "react";
import { Route, Routes } from "react-router";
import Carousel from "../../components/carousel";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Dashboard from "../Dashboard";
import Milestones from "../Milestones";
import Milestone from "../Milestones/Milestone";
import NewMilestone from "../Milestones/NewMilestone";
import View404 from "../View404";

export default function Desktop() {
  return (
    <div className="desktop">
      <Sidebar />
      <div className="dashboard">
        <div className="container">
          <Header />
          <div>
            <Carousel />
            <Routes>
              <Route path="*" element={<View404 />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/milestones" element={<Milestones />} />
              <Route path="/milestones/create" element={<NewMilestone />} />
              <Route path="/milestones/:id" element={<Milestone />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Desktop from "./views/Desktop";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Desktop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* {milestones.map((item) => {
  return <Milestone date={item.date} description={item.description} />;
})} */

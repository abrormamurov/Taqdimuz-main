import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Edit from "./pages/Edit/Edit";
import Preview from "./pages/Preview/Preview";

function HashRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/preview/:username" element={<Preview />} />
        <Route path="/edit/:username" element={<Edit />} />
      </Routes>
    </HashRouter>
  );
}

export default HashRoutes;

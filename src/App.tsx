import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InteractivePreview from "./components/InteractivePreview";
import AdminPanel from "./components/AdminPanel";

export default function App() {
  return (
    <Router>
      <div id="workspace-root" className="bg-slate-50 text-slate-900 font-sans min-h-screen">
        <Routes>
          <Route path="/" element={<InteractivePreview />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import UserPage from "./pages/UserPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div>
          <nav>
            <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
              <li>
                <Link to="/user">User Management</Link>
              </li>
              <li>
                <Link to="/charts">Dashboard</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/user" element={<UserPage />} />
            <Route path="/charts" element={<DashboardPage />} />
            <Route
              path="/"
              element={
                <div>
                  <h1>Welcome to Sakila Dashboard!</h1>
                  <p>Choose a page to get started.</p>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </DndProvider>
  );
}

export default App;

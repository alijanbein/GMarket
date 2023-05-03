import React, { useContext, useState } from "react";
import Table from "../components/table";
import AuthContext from "../context/auth-context";
import Shows from "../components/shows";
import Dashboard from "../components/dashboard";
import Reports from "../components/reports";
import Sidebar from "../components/sidebar";
function HomePage() {
  const auth = useContext(AuthContext);
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [activeBoard, setActiveBoard] = useState({
    dashboard: true,
    shows: false,
    reports: false,
  });
  const dashboardHandler = () => {
    setActiveComponent("dashboard");
    setActiveBoard({
      dashboard: true,
      shows: false,
      reports: false,
    });
  };
  const showsHandler = () => {
    setActiveComponent("shows");
    setActiveBoard({
      dashboard: false,
      shows: true,
      reports: false,
    });
  };
  const ReportsHandler = () => {
    setActiveComponent("reports");
    setActiveBoard({
      dashboard: false,
      shows: false,
      reports: true,
    });
  };
  return (
    <div className="wrapper">
      <Sidebar activeBoard ={activeBoard} dashboardHandler ={dashboardHandler} showsHandler ={showsHandler} ReportsHandler={ReportsHandler}  />
      <div className="header">
        <nav>
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a
                onClick={() => {
                  auth.logout();
                }}
                href="/auth"
              >
                logout
              </a>
            </li>
          </ul>
        </nav>
        <div className="content">
          {activeComponent === "dashboard" && <Dashboard />}
          {activeComponent === "shows" && <Shows />}
          {activeComponent === "reports" && <Reports />}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

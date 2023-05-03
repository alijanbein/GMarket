import React, { useContext, useState } from "react";
import Table from "../components/table";
import AuthContext from "../context/auth-context";
import Shows from "../components/shows";
import Dashboard from "../components/dashboard";
import Reports from "../components/reports";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import SideDrawer from "../components/UIElements/SideDrawer";
function HomePage() {
  const auth = useContext(AuthContext);
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [showDrawer, setShowDrawer] = useState(false);
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

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  const openDrawer = () => {
    setShowDrawer(true);
  };
  return (
    <div className="wrapper">
      {showDrawer && (
        <SideDrawer onClick={closeDrawer} show={showDrawer}>
          <Sidebar
            activeBoard={activeBoard}
            dashboardHandler={dashboardHandler}
            showsHandler={showsHandler}
            ReportsHandler={ReportsHandler}
          />
        </SideDrawer>
      ) 
      }
     <Sidebar
          className ={'try'}
          activeBoard={activeBoard}
          dashboardHandler={dashboardHandler}
          showsHandler={showsHandler}
          ReportsHandler={ReportsHandler}
        />
      <div className="header">
        <Header onClick={showDrawer ? closeDrawer : openDrawer} />
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

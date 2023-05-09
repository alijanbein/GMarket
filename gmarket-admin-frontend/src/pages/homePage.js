import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/auth-context";
import Shows from "../components/shows";
import Dashboard from "../components/dashboard";
import Reports from "../components/reports";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import SideDrawer from "../components/UIElements/SideDrawer";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const auth = useContext(AuthContext);
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [showDrawer, setShowDrawer] = useState(false);
  const navigatie = useNavigate()
  const [activeBoard, setActiveBoard] = useState({
    Dashboard: true,
    Categories: false,
    Reports: false,
  });

  useEffect(()=>{
    if(!auth.isLoggedIn){
      navigatie("/auth")
    }
  })
  const dashboardHandler = () => {
    setActiveComponent("Dashboard");
    setActiveBoard({
      dashboard: true,
      shows: false,
      reports: false,
    });
  };
  const showsHandler = () => {
    setActiveComponent("Categories");
    setActiveBoard({
      dashboard: false,
      shows: true,
      reports: false,
    });
  };
  const ReportsHandler = () => {
    setActiveComponent("Reports");
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
            phone

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
        <Header board = {activeComponent} onClick={showDrawer ? closeDrawer : openDrawer} />
        <div className="content">
          {activeComponent === "Dashboard" && <Dashboard />}
          {activeComponent === "Categories" && <Shows />}
          {activeComponent === "Reports" && <Reports />}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

import React, { useContext, useState } from "react";
import Table from "../components/table";
import AuthContext from "../context/auth-context";
import Shows from "../components/shows";
import Dashboard from "../components/dashboard";
import Reports from "../components/reports";

function HomePage() {
    const auth = useContext(AuthContext)
    const [activeComponent, setActiveComponent] = useState('dashboard');
    const dashboardHandler =() =>{
        setActiveComponent("dashboard")
    }
    const showsHandler =() =>{
        setActiveComponent("shows")
    }
    const ReportsHandler =() =>{
        setActiveComponent("reports")
    }
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li className="active">
            <button onClick={dashboardHandler}> Dashboard</button>
            </li>
            <li>
            <button onClick={showsHandler}>Shows</button>
            </li>
            <li>
            <button onClick={ReportsHandler}>Reports</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header">
      <nav>
          <ul>
            <li className="active">
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a onClick={() =>{auth.logout()}} href="/auth" >logout</a>
            </li>
          
          </ul>
        </nav>
        <div className="content">
                {activeComponent === "dashboard" && <Dashboard/>}
                {activeComponent === "shows" && <Shows/>}
                {activeComponent === "reports" && <Reports/>}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

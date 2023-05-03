import React from 'react'
import logo from "../assets/logo.png"

function Sidebar(props) {
  return (
    <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li className={props.activeBoard.dashboard ? "active" : ""}>
              <button onClick={props.dashboardHandler}> Dashboard</button>
            </li>
            <li className={props.activeBoard.shows ? "active" : ""}>
              <button onClick={props.showsHandler}>Shows</button>
            </li>
            <li className={props.activeBoard.reports ? "active" : ""}>
              <button onClick={props.ReportsHandler}>Reports</button>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Sidebar
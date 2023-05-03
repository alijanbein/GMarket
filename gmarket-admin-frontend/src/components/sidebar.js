import React, { useContext } from 'react'
import logo from "../assets/logo.png"
import AuthContext from '../context/auth-context'

function Sidebar(props) {
    const auth = useContext(AuthContext)
  return (
    <div className={"sidebar " + props.className}>
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
            {
                props.phone &&  <li>
              <button onClick={()=>{auth.logout()}}>logout</button>
            </li>
            }

          </ul>
        </nav>
      </div>
  )
}

export default Sidebar
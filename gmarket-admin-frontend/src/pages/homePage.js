import React from "react";

function HomePage() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li className="active">
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Shows</a>
            </li>
            <li>
              <a href="#">Reports</a>
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
              <a href="#">Shows</a>
            </li>
          
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HomePage;

import React, { useContext, useState } from "react";
import AuthContext from "../context/auth-context";
import AnimatedButton from "./UIElements/animated-button";
import { RiLogoutCircleRLine } from "react-icons/ri";
function Header(props) {
  const auth = useContext(AuthContext);
  const [className, setClassName] = useState("");

  const toggleButton = () => {
    if (className === "on") {
      setClassName("");
    } else {
      setClassName("on");
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#">{props.board}</a>
        </li>
        <li>
          <a
            onClick={() => {
              auth.logout();
            }}
            href="/auth"
          >
            <RiLogoutCircleRLine style={{marginRight:'5px'}} /> Logout

          </a>
        </li>
        <li
          onClick={() => {
            toggleButton();
            props.onClick();
          }}
          className="hum"
        >
          <AnimatedButton className={className} />
        </li>
      </ul>
    </nav>
  );
}

export default Header;

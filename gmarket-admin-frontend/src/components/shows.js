import React, { useContext, useEffect, useState } from "react";
import Table from "./table";
import UseHttp from "../hooks/http-hook";
import AuthContext from "../context/auth-context";
const th = ["sh", "role", "status", "Action"];
const tr = [
  [
    "JohnDoe",
    "johndoe@example.com",
    <img
      className="carousel-image"
      src="https://picsum.photos/id/1003/200/200"
    />,
    "Active",
    <button>Delete</button>,
  ],
  [
    "JohnDoe",
    "johndoe@example.com",
    <img
      className="carousel-image"
      src="https://picsum.photos/id/1003/200/200"
    />,
    "Active",
    <button>Delete</button>,
  ],
];
function Shows() {
  const [error, isLoading, sendRequest] = UseHttp();
  const [data, setData] = useState([]);
  const auth = useContext(AuthContext);

  return <Table th={th} tr={tr} />;
}

export default Shows;

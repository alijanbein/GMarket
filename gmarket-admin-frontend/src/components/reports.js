import React, { useContext, useEffect, useState } from "react";
import Table from "./table";
import UseHttp from "../hooks/http-hook";
import AuthContext from "../context/auth-context";
import { useNavigate } from "react-router-dom";
const th = ["first_name", "last_name", "message", "Action"];


function Reports() {
  const [error, isLoading, sendRequest] = UseHttp();
  const [data, setData] = useState([]);
  const auth = useContext(AuthContext);
  const navigate = useNavigate()

  const deleteUser = async(_id) => {
    const formData = new FormData()
    formData.append("userId",_id)
      const response = await sendRequest("admin/delete_by_id","DELETE",formData,{
        authorization: "Bearer " + auth.token 
      })
      if (response.status == "sucess") {
       navigate(0)
      }
  }

  useEffect(() =>{
    const fetchData = async () => {
      const response = await sendRequest("admin/reports", "GET", "", {
        authorization: "Bearer " + auth.token,
      });
      if (response.status == "sucess") {
        console.log(response.reports);
        const tr = response.reports.map(
          ({message,reported }) => !!reported ? [
            reported.first_name,
            reported.last_name,
            message,
            <button onClick={() =>{deleteUser(reported._id)}}>Delete</button>
          ]:[]
        );

        setData(tr);
      } else {
        console.log("faild");
      }
    };
    fetchData();
  },[])

  return  <>
  {data.length != 0 && <Table th={th} tr={data} />}
</>
 
}

export default Reports;

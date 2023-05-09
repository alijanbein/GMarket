import React, { useContext, useEffect, useState } from "react";
import Table from "./table";
import UseHttp from "../hooks/http-hook";
import AuthContext from "../context/auth-context";
import { useNavigate } from "react-router-dom";
const th = ["first_name", "last_name", "email", "phone_number","Action"];

function Dashboard() {
  const [error, isLoading, sendRequest] = UseHttp();
  const [data, setData] = useState([]);
  const auth = useContext(AuthContext);
  const navigate = useNavigate()

  const deleteUser = async(_id) => {
    const formData = new FormData()
    formData.append("userId",_id)
      const response = await sendRequest("admin/delete_by_id","POST",formData,{
        authorization: "Bearer " + auth.token 
      })
      if (response.status == "sucess") {
        navigate(0)
      }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await sendRequest("admin/users", "GET", "", {
        authorization: "Bearer " + auth.token,
      });
      console.log(response);
      if (response.status == "sucess") {
        const tr = response.users.map(
          ({type, _id,first_name, last_name, email, phone_number }) => type != 'admin' ? [
            first_name,
            last_name,
            email,
            phone_number,
            <button onClick={() =>{deleteUser(_id)}}>Delete</button>
          ]:[]
        );

        console.log(tr);
        setData(tr);
      } else {
        console.log("faild");
      }
    };
    fetchData();
  }, []);
  return <>{data.length != 0 && <Table dashboard th={th} tr={data} />}</>;
}

export default Dashboard;

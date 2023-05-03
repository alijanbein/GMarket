import React, { useContext, useEffect, useState } from "react";
import Table from "./table";
import UseHttp from "../hooks/http-hook";
import AuthContext from "../context/auth-context";
const th = ["first_name", "last_name", "email", "phone_number","Action"];
// const tr = [['JohnDoe','johndoe@example.com',
// <img className='carousel-image' src='https://picsum.photos/id/1003/200/200' />,
// 'Active',<button>Delete</button>],
// ['JohnDoe','johndoe@example.com',
// <img className='carousel-image' src='https://picsum.photos/id/1003/200/200' />,
// 'Active',<button>Delete</button>] ]
function Dashboard() {
  const [error, isLoading, sendRequest] = UseHttp();
  const [data, setData] = useState([]);
  const auth = useContext(AuthContext);

  const deleteUser = (_id) => {
    
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
  return <>{data.length != 0 && <Table th={th} tr={data} />}</>;
}

export default Dashboard;

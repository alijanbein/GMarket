import React, { useContext, useState } from "react";
import UseHttp from "../hooks/http-hook";
import AuthContext from "../context/auth-context";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const auth = useContext(AuthContext)
// export const numberRegex = /^\d+$/;
    const [erro,isLoading,sendRequest] = UseHttp()
    const navigation = useNavigate()
    const [data,setData] = useState({
        email:"",
        password:""
    })

    const [dataValid, setDataVAlid] = useState({
        email: true,
        password: true,
      });

      const emailhandler = (event) => {
        setDataVAlid({
          email: true,
          password: true,
        });
        setData({ ...data, email: event.target.value });
      };
      const passwordHandler = (event) => {
        setDataVAlid({
            email: true,
            password: true,
          });
          setData({ ...data, password: event.target.value });
      };
      const sendData = async (event) => {
        event.preventDefault()
        let valid = true;
        if (data.password.length < 5) {
          setDataVAlid({ ...dataValid, last_name: false });
          valid = false;
        }
       
        if (!emailRegex.test(data.email)) {
          valid = false;
          setDataVAlid({ ...dataValid, email: false });
        }
        if (valid) {
          const formData = new FormData()
          formData.append("password",data.password);
          formData.append("email",data.email);
            
          const response  = await sendRequest("auth/admin_login","POST",formData,{});
          if(response.status == "sucess"){
            auth.login(response.token)
            navigation('/')
        }
          else{
            setDataVAlid({
                email: false,
                password: false,
            })
        }
        }
      };
  return (
    <div className="container">
        <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={sendData}>
        <div className="user-box">
          <input value={data.email} onChange={emailhandler} type="text" placeholder="Enter your email" />
          <label className={!dataValid.email ? 'invalid' :""}>Email</label>
        </div>
        <div className="user-box">
          <input value={data.password} onChange={passwordHandler} type="password" placeholder="Enter your password"  />
          <label className={!dataValid.password ? 'invalid':""}>Password</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default AuthPage;

import React, { useState } from "react";

const AuthPage = () => {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// export const numberRegex = /^\d+$/;
    const [data,setData] = useState({
    })

    const [dataValid, setDataVAlid] = useState({
        email: true,
        password: true,
      });

      const emailhandler = (text) => {
        setDataVAlid({
          email: true,
          password: true,
        });
        setData({ ...data, email: text });
      };
      const passwordHandler = (text) => {
        setDataVAlid({
            email: true,
            password: true,
          });
          setData({ ...data, password: text });
      };
      const sendData = async () => {
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
        
          const response  = await sendRequest("auth/register","POST",formData,{});
          if(response.status == "sucess"){
            
          }
          else{
            console.log("response","can't");
          }
        }
      };
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required="" />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AuthPage;

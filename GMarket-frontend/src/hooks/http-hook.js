import { useState } from "react";
import { BASE_URL } from "../contansts/spacing";

const UseHttp = () => {
  const [isLoading,setIsLoading] = useState(false)
  const [error,setIsError] = useState('')
  const sendRequest = async (url, method = "GET", body = "", header = {}) => {
    let data;
    try {
      setIsError('')
      setIsLoading(true)
      const Response =
        (await fetch(BASE_URL + url, {
          method: method,
          headers: header,
          body: !!body ? JSON.stringify(body) : null,
        })) || null;
      data = await Response.json();
      if (!Response.ok) {
        throw new Error(data);
      }
      setIsLoading(false)
    } catch (err) {
      console.log("erro",err.message);
      setIsLoading(false)
      setIsError(err.message)
    }

    return data;
  };
  return [isLoading,error,sendRequest]
};
export default UseHttp;

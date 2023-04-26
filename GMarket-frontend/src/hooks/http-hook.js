const UseHttp = async (url, method = "GET", body = "", header = {}) => {
  let data;
  const URL = "http://localhost:3000/";
  try {
    const Response =
      (await fetch(URL + url, {
        method: method,
        headers: header,
        body: !!body ? JSON.stringify(body) : null,
      })) || null;
    data = await Response.json();
    if (!Response.ok) {
      throw new Error(data);
    }
  } catch (err) {
    console.log(err.message);
  }

  return data;
};

export default UseHttp;

import { Routes, BrowserRouter, Route } from "react-router-dom";
import AuthPage from "./pages/authPage";
import { useEffect, useState } from "react";
import AuthContext from "./context/auth-context";
import HomePage from "./pages/homePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
        login(token)
    }
  }, []);
console.log(isLoggedIn);
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
        <Routes>
          {!isLoggedIn&& <Route path="/auth" element={<AuthPage />} />}
          {isLoggedIn && <Route path="/" element={<HomePage />} />}
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;

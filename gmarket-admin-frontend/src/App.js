import { Routes, BrowserRouter, Route } from "react-router-dom";
import AuthPage from "./pages/authPage";
import { useEffect, useState } from "react";
import AuthContext from "./context/auth-context";

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
    login(token);
  }, []);

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;

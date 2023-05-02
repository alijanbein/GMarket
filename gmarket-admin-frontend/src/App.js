import {Routes,BrowserRouter,Route} from "react-router-dom"
import AuthPage from "./pages/authPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element ={<AuthPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
 

function App() {

  const { user }  = useContext(AuthContext);
  
  const ProtectedRoute = ({ children }) => {
    if(!user){
      return <Navigate to= "/login" />
    }
    return children;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            } />
          <Route path="login" element={<Login/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;




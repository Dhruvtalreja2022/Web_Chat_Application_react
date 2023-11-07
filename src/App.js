
import React, { useContext } from "react";
import "./style.scss";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Navigate } from "react-router-dom";
import {
  BrowserRouter,Route,Routes
} from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const {currentUser} = useContext(AuthContext);
  const ProjectedRoute = ({children})=>{
    if(!currentUser){
        return <Navigate to ="/login"/>
    }
    return children    
  }

  console.log(currentUser);
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element= {
          <ProjectedRoute>
            <Home/>
          </ProjectedRoute>
          }/>
          <Route path="Login" element= {<Login/>}/>
          <Route path="register" element= {<Register/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

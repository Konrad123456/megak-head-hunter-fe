import React from 'react';
import {Route,Routes} from "react-router-dom";
import {UserPage} from "./pages/UserPage/UserPage";
import {LoginPage} from "./pages/LoginPage/LoginPage";

function App() {

  return (
  
      <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/user/:id" element={<UserPage/>}/>
      </Routes>

  )
}

export default App;

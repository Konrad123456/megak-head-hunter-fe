import React from 'react';
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {AdminViewPage} from "./pages/AdminViewPage/AdminViewPage";
import {UserPage} from "./pages/userPage/UserPage";


function App() {

    return (
        <Routes>
            <Route path={'/'} element={<LoginPage/>}/>
            <Route path={'/admin'} element={<AdminViewPage/>}/>
            <Route path={'/user'} element={<UserPage/>}/>
            <Route path={'*'} element={<LoginPage/>}/>
        </Routes>
    )
}

export default App;

import React from 'react';
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {AdminViewPage} from "./pages/AdminViewPage/AdminViewPage";


function App() {

    return (

        <Routes>
            <Route path={'/'} element={<LoginPage/>}/>
            <Route path={'/admin'} element={<AdminViewPage/>}/>
        </Routes>

    )
}

export default App;

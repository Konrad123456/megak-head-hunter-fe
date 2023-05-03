import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {UserPage} from './pages/UserPage/UserPage';
import {LoginPage} from './pages/LoginPage/LoginPage';
import {AdminViewPage} from './pages/AdminViewPage/AdminViewPage';
import {useRefreshMutation} from "./api/authApiSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUser, setCredentials} from "./store/auth/authSlice";
import {navigateToDefaultRoute} from "./utils/navigation/navigation";
import {useNavigate} from "react-router";
import {RegisterPage} from "./pages/RegisterPage";


function App() {

    const user = useSelector(selectCurrentUser);
    const [refresh] = useRefreshMutation();
    const navigator = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const checkLogIn = async () => {
            if (user === null) {
                try {
                    const userData = await refresh({}).unwrap();
                    if (userData) {
                        dispatch(setCredentials(userData));
                        navigator(navigateToDefaultRoute(userData.user));
                    }
                } catch (e) {

                }
            }
        }
        checkLogIn();
    }, []);

    return (
        <Routes>
            <Route path={'/'} element={<LoginPage/>}/>
            <Route path={'/admin'} element={<AdminViewPage/>}/>
            <Route path='/user/:id' element={<UserPage/>}/>
            <Route path={'/user'} element={<UserPage/>}/>
            <Route path={'/register/:userId/:registerToken'} element={<RegisterPage/>}/>
            <Route path={'*'} element={<LoginPage/>}/>
        </Routes>
    );
}

export default App;

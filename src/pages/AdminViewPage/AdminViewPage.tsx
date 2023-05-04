import React, {useState} from 'react';
import './_AdminViewPage.scss';
import {AdminViewFormHrAdd} from '../../components/Formik/Forms/AdminViewFormHrAdd';
import {AdminViewFormStudentsAdd} from '../../components/Formik/Forms/AdminViewFormStudentsAdd';
import {AdminViewPasswordChangeForm} from '../../components/Formik/Forms/AdminViewPasswordChangeForm';
import staticText from '../../languages/en.pl';
import {Logo} from '../../components/Logo/Logo';
import {logOut} from "../../store/auth/authSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {useLogoutMutation} from "../../api/authApiSlice";

export const AdminViewPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logout] = useLogoutMutation();

    const [switches, setSwitches] = useState({
        modalOn: false,
        settings: false,
        addStudents: false,
        addHr: false,
    });

    const handleModalExit = () => {
        setSwitches({
            modalOn: false,
            settings: false,
            addStudents: false,
            addHr: false,
        });
    };


    const handleButtons = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        setSwitches({
            settings: false,
            addStudents: false,
            addHr: false,
            [e.currentTarget.id]: true,
            modalOn: true,
        });
    };

    const onLogOutHandler = async () => {
        try {
            await logout({}).unwrap();
            dispatch(logOut());
            navigate('/');
        } catch (e) {

        }
    }

    return (
        <div className='wrapper'>
            <div className={'admin-view'}>
                <header className={'admin-view__header'}>
                    <div className='admin-view__header-picture'>
                        <Logo classType='logo'/>
                    </div>
                    <h2>{staticText.adminPage.adminPanel}</h2>
                    <button onClick={handleButtons} id={'settings'} className={'btn'}>
                        {staticText.adminPage.settings}
                    </button>
                </header>
                <nav className={'admin-view__navigation'}>
                    <div className={'admin-view__navigation-buttons'}>
                        <button id={'addHr'} onClick={handleButtons} className={'btn'}>
                            {staticText.adminPage.addHr}
                        </button>
                        <button
                            id={'addStudents'}
                            onClick={handleButtons}
                            className={'btn'}
                        >
                            {staticText.adminPage.importStudents}
                        </button>
                    </div>
                </nav>
                {switches.modalOn ? <div className={'admin-view__modal'}></div> : null}
                {switches.addHr ? (
                    <div className={'admin-view__modal-form'}>
                        <div className="admin-view__logo">
                            <Logo classType={'admin-view__logo-img'}/>
                            <h3>{staticText.adminPage.singleHrForm}
                            </h3></div>
                        <AdminViewFormHrAdd handleModalExit={handleModalExit}/>
                    </div>
                ) : null}
                {switches.addStudents ? (
                    <div className={'admin-view__modal-form'}>
                        <div className="admin-view__logo">
                            <Logo classType={'admin-view__logo-img'}/>
                            <h3>{staticText.adminPage.importStudentsFromFile}
                            </h3></div>
                        <div className="admin-view__modal-files">
                            <h3>przykładowe pliki</h3>
                            <div className="sample-files">
                                <a className={'btn'} download={true} href="../utils/files/students.csv">plik csv</a>
                                <a className={'btn'} download={true} href="../utils/files/students.json">plik json</a>
                            </div>
                        </div>
                        <AdminViewFormStudentsAdd handleModalExit={handleModalExit}/>
                    </div>
                ) : null}
                {switches.settings ? (
                    <div className={'admin-view__modal-form'}>
                        <div className="admin-view__logo">
                            <Logo classType={'admin-view__logo-img'}/>
                            <h3>{staticText.adminPage.adminSettings}
                            </h3></div>
                        <AdminViewPasswordChangeForm handleModalExit={handleModalExit}/>
                    </div>
                ) : null}
                <button className={'admin-view__go-back-button btn'} onClick={onLogOutHandler}>
                    {staticText.navigation.logout}
                </button>
            </div>
        </div>
    );
};

import React, {useState} from "react";
import './_AdminViewPage.scss'
import {AdminViewFormHrAdd} from "../../components/Formik/Forms/AdminViewFormHrAdd";
import {AdminViewFormStudentsAdd} from "../../components/Formik/Forms/AdminViewFormStudentsAdd";
import {AdminViewPasswordChangeForm} from "../../components/Formik/Forms/AdminViewPasswordChangeForm";
import staticText from '../../languages/en.pl';
import {Logo} from "../../components/Logo/Logo";


export const AdminViewPage = () => {
    const [switches, setSwitches] = useState({
        modalOn: false,
        settings: false,
        addStudents: false,
        addHr: false,
    })

    const handleModalExit = () => {
        setSwitches({
            modalOn: false,
            settings: false,
            addStudents: false,
            addHr: false,
        })
    }

    const handleButtons = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setSwitches({
            settings: false,
            addStudents: false,
            addHr: false,
            [e.currentTarget.id]: true,
            modalOn: true,
        })
    }


    return (
        <div className="wrapper">
            <div className={'admin-view'}>
                <header className={'admin-view__header'}>
                    <div className="admin-view__header-picture">
                        <Logo/>
                    </div>
                    <h2>{staticText.adminPage.adminPanel}</h2>
                    <button onClick={handleButtons} id={'settings'}
                            className={'btn'}>{staticText.adminPage.settings}</button>
                </header>
                <nav className={'admin-view__navigation'}>
                    <div className={'admin-view__navigation-buttons'}>
                        <button id={'addHr'} onClick={handleButtons}
                                className={'btn'}>{staticText.adminPage.addHr}</button>
                        <button id={'addStudents'} onClick={handleButtons}
                                className={'btn'}>{staticText.adminPage.importStudents}</button>
                    </div>
                </nav>
                {switches.modalOn && <div className={'admin-view__modal'}></div>}
                {switches.addHr && <div className={'admin-view__modal-form'}>
                    <div className="admin-view__logo">
                        <Logo/>
                        <h3>{staticText.adminPage.singleHrForm}
                        </h3></div>
                    <AdminViewFormHrAdd handleModalExit={handleModalExit}/>
                </div>}
                {switches.addStudents && <div className={'admin-view__modal-form'}>
                    <div className="admin-view__logo">
                        <Logo/>
                        <h3>{staticText.adminPage.importStudentsFromFile}
                        </h3></div>
                    <AdminViewFormStudentsAdd handleModalExit={handleModalExit}/>
                </div>}
                {switches.settings && <div className={'admin-view__modal-form'}>
                    <div className="admin-view__logo">
                        <Logo/>
                        <h3>{staticText.adminPage.adminSettings}
                        </h3></div>
                    <AdminViewPasswordChangeForm handleModalExit={handleModalExit}/>
                </div>}
                <button className={'admin-view__go-back-button btn'}>{staticText.navigation.logout}</button>
            </div>
        </div>
    )
}
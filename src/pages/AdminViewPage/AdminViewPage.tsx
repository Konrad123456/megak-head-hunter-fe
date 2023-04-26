import React, {useState} from "react";
import './_AdminViewPage.scss'
import {AdminViewFormHrAdd} from "../../components/Formik/Forms/AdminViewFormHrAdd";
import {AdminViewFormStudentsAdd} from "../../components/Formik/Forms/AdminViewFormStudentsAdd";
import {AdminViewPasswordChangeForm} from "../../components/Formik/Forms/AdminViewPasswordChangeForm";


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
                    <img src={require('../../utils/img/logo.png')} alt=""/>
                </div>
                <h2>panel administratora</h2>
                <button onClick={handleButtons} id={'settings'} className={'btn'}>ustawienia</button>
            </header>
            <nav className={'admin-view__navigation'}>
                <div className={'admin-view__navigation-buttons'}>
                    <button id={'addHr'} onClick={handleButtons} className={'btn'}>dodaj hr</button>
                    <button id={'addStudents'} onClick={handleButtons} className={'btn'}>importuj kursantów</button>
                </div>
            </nav>
            {switches.modalOn ? <div className={'admin-view__modal'}></div> : null}
            {switches.addHr ? <div className={'admin-view__modal-form'}>
                <h3>Formularz dodawania pojedyńczego HR</h3>
                <AdminViewFormHrAdd handleModalExit={handleModalExit}/>
            </div> : null}
            {switches.addStudents ? <div className={'admin-view__modal-form'}>
                <h3>importuj kursantów z pliku</h3>
                <AdminViewFormStudentsAdd handleModalExit={handleModalExit}/>
            </div> : null}
            {switches.settings ? <div className={'admin-view__modal-form'}>
                <h3>ustawienia konta administratora</h3>
                <AdminViewPasswordChangeForm handleModalExit={handleModalExit}/>
            </div> : null}
            <button className={'admin-view__go-back-button btn'}>powrót</button>
        </div>
        </div>
    )
}
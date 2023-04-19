import React, {useState} from "react";
import './_AdminViewPage.scss'

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
        <div className={'admin-view'}>
            <header className={'admin-view__header'}>
                <div className="admin-view__header-picture">
                    <img src={require('../utils/img/logo.png')} alt=""/>
                </div>
                <h2>panel administratora</h2>
                <button onClick={handleButtons} className={'btn'}>ustawienia</button>
            </header>
            <nav className={'admin-view__navigation'}>
                <div className={'admin-view__navigation-buttons'}>
                    <button id={'addHr'} onClick={handleButtons} className={'btn'}>dodaj hr</button>
                    <button onClick={handleButtons} className={'btn'}>importuj kursantów</button>
                </div>
            </nav>
            {switches.modalOn ? <div className={'admin-view__modal'}></div> : null}
            {switches.addHr ? <div className={'admin-view__modal-form'}>
                <h3>Formularz dodawania pojedyńczego HR</h3>
                <button onClick={handleModalExit} className={'btn modal'}>zamknij</button></div> : null}
            <button className={'admin-view__go-back-button btn'}>powrót</button>
        </div>
    )
}
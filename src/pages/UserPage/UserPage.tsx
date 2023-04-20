import React from "react";

import "./_user_page.scss"
import {Logo} from "../../components/Logo/Logo";

interface Props {
}

export const UserPage = (props:Props) => (
    <>
        <div className='user-page'>
            <div className='user-page__header'>
                <Logo />
                <h1>Witaj Kuba!</h1>
            </div>
            <div className="user-page__container">
                <label htmlFor="salary">Wynagrodzenie</label>
                <input id="salary" type="number" placeholder="poprzednia wartość"/>
            </div>
        </div>
    </>
)
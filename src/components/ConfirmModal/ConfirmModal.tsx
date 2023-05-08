import React from "react";
import {Logo} from "../Logo/Logo";
import './ConfirmModal.scss'
import {useNavigate} from "react-router";

export const ConfirmModal = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
    return (
        <div className="confirm-modal">
            <div className="confirm-modal-logo">
                <Logo classType={'confirm-modal__img'}/>
            </div>
            <h3>hasło użytkownika ustanowione, proszę o zalogowanie się.</h3>
            <div onClick={handleClick} className="btn">ok</div>
        </div>
    )
}
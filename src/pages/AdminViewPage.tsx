import React from "react";
import './_AdminViewPage.scss'
import{Link,NavLink}from'react-router-dom'
export const AdminViewPage = ()=>{



    return(
        <div className={'admin-view'}>
<header className={'admin-view__header'}>
    <div className="admin-view__header-picture">
        <img src={require('../utils/img/logo.png')} alt=""/>
    </div>
    <h2>panel admina</h2>
    <button>ustawienia</button>
</header>
            <nav className={'admin-view__navigation'}>
                <ul>
                    {/*<Link/>*/}
                </ul>
            </nav>
        </div>
    )
}
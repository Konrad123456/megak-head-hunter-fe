import React from "react";
import '../../src/scss/AdmivViewPage.scss'

export const AdminViewPage = ()=>{



    return(
        <div className={'admin-view'}>
<header className={'admin-view__header'}>
    <div className="admin-view__header-picture">
        <img src={require('../assets/images/MegaK.png')} alt=""/>
    </div>
    <h2>panel admina</h2>
    <button>ustawienia</button>
</header>
        </div>
    )
}
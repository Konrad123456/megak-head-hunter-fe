import React from "react";

import "./_user_page.scss"
import {Logo} from "../../components/Logo/Logo";


export const UserPage = () => (
    <>
        <div className='user-page'>
            <div className='user-page__header'>
                <Logo />
                <h1>Witaj Kuba!</h1>
            </div>
            <div className="user-page__container">
                <div className="user-inputs">
                    <div className="input-box">
                        <label htmlFor="email">E-mail</label>
                        <input id="email" type="email" placeholder="xyz@gmail.com"/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="tel">Nr telefonu</label>
                        <input id="tel" type="text" placeholder="755 455 366"/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="firstName">Imię</label>
                        <input id="firstName" type="text" placeholder="np. Andrzej"/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="lastName">Nazwisko</label>
                        <input id="lastName" type="text" placeholder="np. Władysławowicz"/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="githubUsername">GitHub</label>
                        <input id="githubUsername" type="text" placeholder="tutaj to trzeba zwalidować"/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="portfolioUrls">Linki do portfolio</label>
                        <textarea id="portfolioUrls" rows={4} placeholder="linki rozdzielane jakimś znakiem, np enterem"/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="projectUrls">Linki do projektu</label>
                        <textarea id="projectUrls" rows={4} placeholder="linki rozdzielane jakimś znakiem, np enterem"/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="bio">O mnie</label>
                        <textarea id="bio" rows={4} placeholder="biografia"/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="expectedTypeWork">Preferowane miejsce pracy</label>
                        <select id="expectedTypeWork" >
                            <option value="">Bez znaczenia</option>
                            <option value="onSite">Na miejscu</option>
                            <option value="move">Gotowość do przeprowadzki</option>
                            <option value="remote">Wyłącznie zdalnie</option>
                            <option value="partialyRemote">Hybrydowo</option>
                        </select>
                    </div>
                    <div className="input-box">
                        <label htmlFor="targetWorkCity">Preferowane miejsce pracy</label>
                        <input id="targetWorkCity" type="text" placeholder="np. Kraków"/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="expectedContractType">Preferowana forma zatrudnienia</label>
                        <select id="expectedContractType" >
                            <option value="">Brak preferencji</option>
                            <option value="coe">Umowa o pracę</option>
                            <option value="b2b">B2B</option>
                            <option value="mandate">Umowa zlecenie / umowa o dzieło</option>
                        </select>
                    </div>
                    <div className="input-box">
                        <label htmlFor="expectedSalary">Oczekiwane wynagrodzenie</label>
                        <input id="expectedSalary" type="number" placeholder="np.7600"/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="canTakeApprenticeship">Zgoda na bezpłatne praktyki</label>
                        <input id="canTakeApprenticeship" type="checkbox" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="monthsOfCommercialExp">Doświadcznie w miesiącach</label>
                        <input id="monthsOfCommercialExp" type="number" placeholder="np. 18"/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="education">Wykształcenie</label>
                        <textarea id="education" rows={4} placeholder="uczyłem się tu i tu"/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="workExperience">Doświadczenie zawodowe</label>
                        <textarea id="workExperience" rows={4} placeholder="takie i takie"/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="courses">Kursy i certyfikaty</label>
                        <textarea id="courses" rows={4}  placeholder="Certyfikat grillowania w słońcu"/>
                    </div>
                    <div className="submit-box">
                        <button>Zapisz</button>
                    </div>
                </div>
            </div>
        </div>
    </>
)
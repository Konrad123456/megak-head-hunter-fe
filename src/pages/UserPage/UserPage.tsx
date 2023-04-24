import React from "react";

import "./_user_page.scss"
import {Logo} from "../../components/Logo/Logo";


export const UserPage = () => (
    <>
        <div className='user-page'>
            <div className='user-page__header'>
                <Logo />
                <h1>Widok użytkownika</h1>
                <button className="btn">Wyloguj</button>
            </div>
            <div className="user-page__container">
                <div className="user-page__inputs">
                    <div className="user-page__col1">
                        <h2>Dane osobowe:</h2>
                        <div className="user-page__input-box">
                            <label htmlFor="firstName">Imię</label>
                            <input id="firstName" type="text" placeholder="np. Andrzej"/>
                        </div>
                        <div className="user-page__input-box">
                            <label htmlFor="lastName">Nazwisko</label>
                            <input id="lastName" type="text" placeholder="np. Władysławowicz"/>
                        </div>
                        <div className="user-page__input-box">
                            <label htmlFor="email">E-mail</label>
                            <input id="email" type="email" placeholder="xyz@gmail.com"/>
                        </div>
                        <div className="user-page__input-box">
                            <label htmlFor="tel">Nr telefonu</label>
                            <input id="tel" type="text" placeholder="755 455 366"/>
                        </div>
                        <div className="user-page__input-box">
                            <label htmlFor="githubUsername">GitHub</label>
                            <input id="githubUsername" type="text" placeholder="tutaj to trzeba zwalidować"/>
                        </div>
                    </div>
                    <div className="user-page__col2">
                        <h2>Dane na temat zatrudnienia:</h2>
                        <div className="input-container">
                            <div className="input_col1">
                                <div className="user-page__input-box">
                                    <label htmlFor="targetWorkCity">Preferowane miasto</label>
                                    <input id="targetWorkCity" type="text" placeholder="np. Kraków"/>
                                </div>
                                <div className="user-page__input-box">
                                    <label htmlFor="expectedTypeWork">Preferowane miejsce pracy</label>
                                    <select id="expectedTypeWork" >
                                        <option value="">Bez znaczenia</option>
                                        <option value="onSite">Na miejscu</option>
                                        <option value="move">Gotowość do przeprowadzki</option>
                                        <option value="remote">Wyłącznie zdalnie</option>
                                        <option value="partialyRemote">Hybrydowo</option>
                                    </select>
                                </div>
                                <div className="user-page__input-box">
                                    <label htmlFor="expectedContractType">Preferowana forma zatrudnienia</label>
                                    <select id="expectedContractType" >
                                        <option value="">Brak preferencji</option>
                                        <option value="coe">Umowa o pracę</option>
                                        <option value="b2b">B2B</option>
                                        <option value="mandate">Umowa zlecenie / umowa o dzieło</option>
                                    </select>
                                </div>
                                <div className="user-page__input-box">
                                    <label htmlFor="expectedSalary">Oczekiwane wynagrodzenie</label>
                                    <input id="expectedSalary" type="number" placeholder="np.7600"/>
                                </div>
                                <div className="user-page__input-box">
                                    <label htmlFor="monthsOfCommercialExp">Doświadcznie w miesiącach</label>
                                    <input id="monthsOfCommercialExp" type="number" placeholder="np. 18"/>
                                </div>
                            </div>
                            <div className="input_col2">
                                <div className="user-page__input-box checkbox">
                                    <label htmlFor="canTakeApprenticeship">Zgoda na bezpłatne praktyki</label>
                                    <input id="canTakeApprenticeship" type="checkbox" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-page__col3">
                        <h2>O sobie:</h2>
                        <div className="user-page__input-box">
                            <label htmlFor="bio">O mnie</label>
                            <textarea id="bio" rows={4} placeholder="biografia"/>
                        </div>
                        <div className="user-page__input-box">
                            <label htmlFor="portfolioUrls">Linki do portfolio</label>
                            <textarea id="portfolioUrls" rows={4} placeholder="linki rozdzielane jakimś znakiem, np enterem"/>
                        </div>
                        <div className="user-page__input-box">
                            <label htmlFor="projectUrls">Linki do projektu</label>
                            <textarea id="projectUrls" rows={4} placeholder="linki rozdzielane jakimś znakiem, np enterem"/>
                        </div>
                    </div>
                    <div className="user-page__col4">
                        <h2>Wykształcenie i doświadczenie:</h2>
                        <div className="user-page__input-box">
                            <label htmlFor="education">Wykształcenie</label>
                            <textarea id="education" rows={4} placeholder="uczyłem się tu i tu"/>
                        </div>
                        <div className="user-page__input-box">
                            <label htmlFor="workExperience">Doświadczenie zawodowe</label>
                            <textarea id="workExperience" rows={4} placeholder="takie i takie"/>
                        </div>
                        <div className="user-page__input-box">
                            <label htmlFor="courses">Kursy i certyfikaty</label>
                            <textarea id="courses" rows={4}  placeholder="Certyfikat grillowania w słońcu"/>
                        </div>
                    </div>

                </div>
                <div className="user-page__submit-box">
                    <button className="btn user-submit-btn">Zapisz</button>
                </div>
            </div>
        </div>
    </>
)
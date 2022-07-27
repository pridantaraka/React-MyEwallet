import React from 'react'

import authphon from '../assets/image/authphon.png'

export default function SideAuth() {
    return(
        <>
        <section className="auth-pad-cov auth-cov d-md-block d-none">
            <div className="auth-ewallet">
                <span>MyEwallet</span>
            </div>
            <div className="d-flex flex-column align-items-center">
                <div>
                    <img src={authphon} alt="phoneimg"/>
                </div>
                <div>
                    <h1 className=" auth-hcover">App that Covering Banking Needs.</h1>
                    <p className="auth-pcover">MyEwallet is an application that focussing in banking needs for all users
                        in the world. Always updated and always following world trends.
                        5000+ users registered in MyEwallet everyday with worldwide
                        users coverage.</p>
                </div>
            </div>
        </section>
        </>
    )
}
import React from 'react'
import {Link}  from 'react-router-dom'
import './style.css'

import abimg from '../../images/about/about.png'

const Abmain = () => {
    return(
        <div className="wpo-about-item">
            <div className="row">
                <div className="col-lg-6">
                    <div className="wpo-about-img">
                        <img src={abimg} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="wpo-about-text">
                        <h2>I build what you request.</h2>
                        <p>My name is Fatih Ay. I am a full stack developer. I recently gratuated from Toronto University. </p>
                             <Link to="/about" className="theme-btn">Lets Talk</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abmain;
import React from 'react'
import {Link}  from 'react-router-dom'
import './style.css'

import abimg from '../../images/slider/portfolio.png'

const Abmain = () => {
    return(
        <div className="wpo-about-item">
            <div className="row">
                <div className="col-lg-6">
                    <div className="wpo-about-img" style={{alignItems:"center",textAlign:"center"}}>
                        <img src={abimg} alt="" style={{height:"400px",width:"400px"}}/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="wpo-about-text" style={{marginTop:"2%"}}>
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
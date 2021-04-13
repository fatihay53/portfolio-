import React from 'react';
import './style.css'

import abimg from '../../images/about/about.jpg'

import {Link} from 'react-router-dom'

const AboutArea3 = (props) => {

  return (
    <div className="wpo-about-area-3 section-padding">
        <div className="wpo-about-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-s2-img">
                            <img src={abimg} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="wpo-about-text">
                            <h2>I build what you request</h2>
                            <p>My name is Fatih Ay. I am a full stack developer. I recently gratuated from Toronto University.  </p>
                            <ul>
                                <li>High Quality Service</li>
                                <li>Best Price in Marketplace.</li>
                                <li>Unique Design and Development.</li>
                            </ul>
                            <Link to="/" className="theme-btn-s2">Download CV</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutArea3;
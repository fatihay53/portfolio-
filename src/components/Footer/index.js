import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

const Footer = (props) => {
    return(
        <div className={`wpo-footer-area ${props.Ftclass}`}>
            <div className="container">
                <div className="wpo-footer-top">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-3 col-12">
                    
                        </div>
                        <div className="col-lg-6 col-md-9 col-sm-9 col-12">
                            <div className="wpo-footer-menu">
                                <ul>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/protfolioGrid">Portfolio</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="wpo-footer-social">
                                <ul>


                                    <li><a target="_blank" href="https://www.linkedin.com/in/fatih-sultan-ay-211689181/"> <i className="fa fa-linkedin"></i> </a></li>
                                    <li><a target="_blank" href="https://github.com/fatihay53"> <i className="fa fa-github"></i> </a></li>
                                    <li><a target="_blank" href="https://twitter.com/fatihsultanay"> <i className="fa fa-twitter"></i> </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`wpo-footer-bottom ${props.Fbclass}`}>
                <span>© 2020 Ay Design. All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer;
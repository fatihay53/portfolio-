import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

import profolio1 from '../../images/protfolio/goldiemohr.jpg'
import profolio2 from '../../images/protfolio/library.png'
import profolio3 from '../../images/protfolio/img-3.jpg'
import profolio4 from '../../images/protfolio/essential.jpeg'

const PortfolioSub = (props) => {
    return (
        <div className={`wpo-protfolio-area section-padding ${props.subclass}`}>
            <div className="container">
                <div className="col-12">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-protfolio-item">
                            <div className="row">
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="wpo-protfolio-left">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src={profolio2} alt="" />
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Library Management System</h2>
                                                <Link to="/projectDetails">View Work</Link>
                                            </div>
                                        </div>
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src={profolio2} alt="" />
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>3D Project</h2>
                                                <span>Illustration . Art Direction</span>
                                                <Link to="/projectDetails">View Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="wpo-protfolio-right">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src={profolio1} alt="" />
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Goldie Mohr Ltd</h2>
                                
                                                <Link to="/projectDetails">View Work</Link>
                                            </div>
                                        </div>
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src={profolio4} alt="" />
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Essential Finance</h2>
                                                
                                                <Link to="/projectDetails">View Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="protfolio-btn">
                                <Link to="/">See More Work...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSub;
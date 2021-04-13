import React from 'react'
import './style.css'

// import proj1 from '../../images/project/img-4.jpg'
// import proj2 from '../../images/project/img-2.jpg'
// import proj3 from '../../images/project/img-3.jpg'

import proj1 from '../../images/protfolio/goldiemohr.jpg'
import proj2 from '../../images/protfolio/library.png'
import proj3 from '../../images/protfolio/workout.jpg'
import proj4 from '../../images/protfolio/essential.jpeg'

const ProjectSingle = (props) => {
    return (
        <>
            <div className="wpo-project-details-area section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 offset-lg-2">
                            <h1 style={{ textAlign: "center", marginBottom: "5%",color:"white" }}>Goldie Mohr</h1>
                            <div style={{ textAlign: "center" }} className="wpo-minimal-wrap">
                                <div className="wpo-minimal-img">
                                    <img src={proj1} alt="" />
                                </div>
                            </div>
                            <div className="wpo-project-details-list">
                                <div className="row">
                                    <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wpo-project-details-text">
                                            <span>Client Name</span>
                                            <h2>Debbie Mohr</h2>
                                        </div>
                                    </div>
                                    <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wpo-project-details-text-3">
                                            <span>Project Value</span>
                                            <h2>N/A</h2>
                                        </div>
                                    </div>
                                    <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wpo-project-details-text">
                                            <span>Date</span>
                                            <h2>07 Apr 2021</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-p-details-section">
                                <p>This is a new and highly improved web page for the company Goldie Mohr Ltd. This web page features a home page, services & projects, product page, about us, careers and a contact page. This web page also includes a member log in, where employees are able to create a profile page for themselves and watch training videos and complete training quizzes. </p> <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={proj1} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={proj1} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-submit">
                                            <a target="_blank" href="https://github.com/GoldieMohrProject/goldie-mohr"> <button type="submit" className="theme-btn">Github Repository</button> </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-submit">
                                            <a target="_blank" href="https://goldie-mohr-full.herokuapp.com/"> <button type="submit" className="theme-btn">Deploy</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* second Project */}

            <div className="wpo-project-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1 style={{ textAlign: "center", marginBottom: "5%",color:"white" }}>Library Management System</h1>
                            <div style={{ textAlign: "center" }} className="wpo-minimal-wrap">
                                <div className="wpo-minimal-img">
                                    <img src={proj2} alt="" />
                                </div>
                            </div>
                            <div className="wpo-project-details-list">
                                <div className="row">
                                    <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wpo-project-details-text">
                                            <span>Client Name</span>
                                            <h2>Bootcamp Project 2</h2>
                                        </div>
                                    </div>
                                    <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wpo-project-details-text-3">
                                            <span>Project Value</span>
                                            <h2>N/A</h2>
                                        </div>
                                    </div>
                                    <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wpo-project-details-text">
                                            <span>Date</span>
                                            <h2>07 Mar 2021</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-p-details-section">
                                <p>To build a management system that helps in handling the primary functions of libraries that involves
                                maintaining the database for entering new books and recording books that have been borrowed by members </p>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={proj2} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={proj2} alt="" />
                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-submit">
                                            <a target="_blank" href="https://github.com/fatihay53/library-management-system"> <button type="submit" className="theme-btn">Github Repository</button> </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-submit">
                                            <a target="_blank" href="https://library-management-system-lms.herokuapp.com/"> <button type="submit" className="theme-btn">Deploy</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            {/* workout */}

            <div className="wpo-project-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1 style={{ textAlign: "center", marginBottom: "5%",color:"white" }}>Workout Tracker</h1>
                            <div style={{ textAlign: "center" }} className="wpo-minimal-wrap">
                                <div className="wpo-minimal-img">
                                    <img src={proj3} alt="" />
                                </div>
                            </div>
                            <div className="wpo-project-details-list">
                                <div className="row">
                                    <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wpo-project-details-text">
                                            <span>Client Name</span>
                                            <h2>Bootcamp Assignment</h2>
                                        </div>
                                    </div>
                                    <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wpo-project-details-text-3">
                                            <span>Project Value</span>
                                            <h2>N/A</h2>
                                        </div>
                                    </div>
                                    <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wpo-project-details-text">
                                            <span>Date</span>
                                            <h2>13 Mar 2021</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-p-details-section">
                                <p>This application can be used help user to track daily workout/exercise. All information will be saved and user will be able to continue to exercise where they left.
                                A consumer will reach their fitness goals more quickly when they track their workout progress. </p>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={proj3} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={proj3} alt="" />
                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-submit">
                                            <a target="_blank" href="https://github.com/fatihay53/workout-tracker"> <button type="submit" className="theme-btn">Github Repository</button> </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-submit">
                                            <a target="_blank" href="https://workout-tracker-wt.herokuapp.com/?id=604c17a8da256c0015c28c7d"> <button type="submit" className="theme-btn">Deploy</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* essential */}

            <div className="wpo-project-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1 style={{ textAlign: "center", marginBottom: "5%",color:"white" }}>Essential Finance</h1>
                            <div style={{ textAlign: "center" }} className="wpo-minimal-wrap">
                                <div className="wpo-minimal-img">
                                    <img src={proj4} alt="" />
                                </div>
                            </div>
                            <div className="wpo-project-details-list">
                                <div className="row">
                                    <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wpo-project-details-text">
                                            <span>Client Name</span>
                                            <h2>Bootcamp Project 1</h2>
                                        </div>
                                    </div>
                                    <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wpo-project-details-text-3">
                                            <span>Project Value</span>
                                            <h2>N/A</h2>
                                        </div>
                                    </div>
                                    <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wpo-project-details-text">
                                            <span>Date</span>
                                            <h2>26 Feb 2021</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-p-details-section">
                                <p>A mobile responsive website that can target people who are beginners, intermediate, or experienced with finance and stock. It has 3 tabs for teaching basics and finance related topics. Each tab consists of a different way to learn the material, through flashcards, quiz, or videos , giving the user a choice of choosing the method of learning that fits best his needs. Another main tab is the stock news tab, which consists of a form to input a company symbol in order to get daily prices (Low, close, open, volume) and then show the closing price of each month for a yearof that company on a graph. Also that tab contains up to date stock related articles. </p>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={proj4} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={proj4} alt="" />
                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-submit">
                                            <a target="_blank" href="https://github.com/fatihay53/Essential-Finance"> <button type="submit" className="theme-btn">Github Repository</button> </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-submit">
                                            <a target="_blank" href="https://fatihay53.github.io/Essential-Finance/"> <button type="submit" className="theme-btn">Deploy</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default ProjectSingle;
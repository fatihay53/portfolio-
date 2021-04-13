import React from 'react';
import './style.css'


const MySkill = (props) => {

  return (
    <div className="skill-area section-padding">
        <div className="container">
            <div className="col-12">
                <div className="section-title-2 text-center">
                    <h2 style={{color:"white"}}>My Hard skills</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                <h1 style={{color:"white",textAlign:"center"}}>JavaScript</h1>
                    <div className="progress yellow">
                        <span className="progress-left">
                            <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                            <span className="progress-bar"></span>
                        </span>
                        
                        <div className="progress-value"> 80%</div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                <h1 style={{color:"white",textAlign:"center"}}>React </h1>
                    <div className="progress blue">
                        <span className="progress-left">
                            <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                            <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">90%</div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                <h1 style={{color:"white",textAlign:"center"}}>Node.js  </h1>
                    <div className="progress pink">
                        <span className="progress-left">
                            <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                            <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">80%</div>
                    </div>
                </div>
                
                <div className="col-md-3 col-sm-6">
                <h1 style={{color:"white",textAlign:"center"}}>Express  </h1>
                    <div className="progress green">
                        <span className="progress-left">
                            <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                            <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">82%</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MySkill;
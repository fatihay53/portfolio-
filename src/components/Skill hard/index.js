import React from 'react'

const Skill = () => {
    return(
        <div className="wpo-about-item">
            <div className="row">
                <div className="col-lg-12">
                    <div className="wpo-counter-grids">
                        <div className="grid">
                            <div>
                                <h2><span className="odometer" data-count="80">80</span>%</h2>
                            </div>
                            <p>Java Script <span><i class="fab fa-js-square" ></i></span></p>
                        </div>
                        <div className="grid">
                            <div>
                                <h2><span className="odometer" data-count="90">90</span>%</h2>
                            </div>
                            <p>React <span><i class="fab fa-react"></i></span></p>
                        </div>
                        <div className="grid">
                            <div>
                                <h2><span className="odometer" data-count="80">80</span>%</h2>
                            </div>
                            <p>Node.js <span><i class="fab fa-node-js"></i></span></p>
                        </div>
                        <div className="grid">
                            <div>
                                <h2><span className="odometer" data-count="70">70</span>%</h2>
                            </div>
                            <p>MysQl <span><i class="fas fa-database"></i></span></p>
                        </div>
                        <div className="grid">
                            <div>
                                <h2><span className="odometer" data-count="82">82</span>%</h2>
                            </div>
                            <p>Express</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;
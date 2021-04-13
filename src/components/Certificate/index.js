import React from 'react'

import Awimg1 from '../../images/about/bachelor.jpg'
import Awimg2 from '../../images/about/autocad.jpeg'
import Awimg3 from '../../images/about/language.jpeg'
// import Awimg4 from '../../images/about/bachelor.jpg'

const Certificate = () => {
    return(
        <div className="Award-wrap">
            <div className="wpo-award-wrap">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="wpo-award-img">
                            <img src={Awimg1} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="wpo-award-img">
                            <img src={Awimg2} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="wpo-award-img">
                            <img src={Awimg3} alt=""/>
                        </div>
                    </div>
                    {/* <div className="col-md-6 col-sm-12">
                        <div className="wpo-award-img">
                            <img src={Awimg4} alt=""/>              
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Certificate;
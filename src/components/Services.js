import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className="services">
        <h1 className="py-5">Expertise</h1>
            <div className="container">
                <div className="row">
{/*-----------------------------------------------------------------------------------------------------------------------------*/}
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/></div>
                            <h3>Full-Stack Web Development</h3>
                            <p>
                                I have experience and training in both front-end and back-end development. I can take a 
                                full-stack application project from concept to reality.  
                            </p>
                        </div>
                    </div>
{/*-----------------------------------------------------------------------------------------------------------------------------*/}

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>
                            <h3>MERN stack</h3>
                            <p>
                                I work primarily in the MERN development stack. I can develop your back-end using either MySQL or 
                                MongoDB depending on project and overall scalability needs.
                            </p>
                        </div>
                    </div>

{/*-----------------------------------------------------------------------------------------------------------------------------*/}

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x"/></div>
                            <h3>SEO</h3>
                            <p>
                                I can work with you to make sure your content is optimized for discoverability on the web.
                            </p>
                        </div>
                    </div>

{/*-----------------------------------------------------------------------------------------------------------------------------*/}

                </div>
            </div>
        </div>
        
    )
}

export default Services

import React from "react";
import { Link } from 'react-scroll';
// import {
//     LinkedinShareButton,
//     LinkedinIcon
// } from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Main St. Boston, MA</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:555-555-5555">+1 555 555 5555</a>
                        </div>
                        <div className="d-flex">
                            <p>email@email.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} offset={-110} to="home" className="footer-nav">Home</Link>
                                <br/>
                                <Link smooth={true} offset={-110} to="about" className="footer-nav">About Me</Link>
                                <br/>
                                <Link smooth={true} offset={-110} to="about" className="footer-nav">Areas of Expertise</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} offset={-110} to="experience" className="footer-nav">CV</Link>
                                <br/>
                                <Link smooth={true} offset={-110} to="portfolio" className="footer-nav">Portfolio</Link>
                                <br/>
                                <Link smooth={true} offset={-110} to="contact" className="footer-nav">Contact</Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <LinkedinShareButton url={"URL_TO_SHARE_HERE"}>
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Footer

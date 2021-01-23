import React from "react";
import logo from "../portfolio-logo.png";
// Fontawesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
            <div className="container">
                {/* <div className="container-fluid"> */}

                    <Link smooth={true} to="about" offset={-110} className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."></img></Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={ faBars } style={{ color: "#fff" }}/>
                    </button>



                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                                <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">Home</Link>
                            </li>                        
                            <li className="nav-item">
                                <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">CV</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
                            </li>                            
                            <li className="nav-item">
                                <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.linkedin.com/in/sunilpatel328/" target="_blank">LinkedIn</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.github.com/sip615/" target="_blank">GitHub</a>
                            </li>
                        </ul>
                    </div>



                {/* </div> */}
            </div>
        </nav>
    )
}

export default Navbar

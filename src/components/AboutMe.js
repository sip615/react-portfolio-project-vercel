import React from "react";
import Author from "../me.png";


const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="author-image" src={Author} alt="Author..."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                    After spending years pursuing a career in Behavioral Neurobiology, 
                    a serendipitous internship opportunity at Harvard Law School offered 
                    me a chance to delve into technology. I fell in love with dissecting 
                    and building computer hardware and, eventually, software tools.
                    </p>
                    <p>
                    Outside of my professional life, I have an interest and aptitude for 
                    languages and travel. I am a big people-person, and love meeting interesting 
                    individuals from all over the world. I am also an aspiring sketch artist, 
                    which lends helpful to my penchant for experimenting with data visualization 
                    styles. I can also fix cars, and am very good at general handyman projects.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe

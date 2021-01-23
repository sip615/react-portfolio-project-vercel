import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";

const Contact = () => {
    const[successMessage, setSuccessMessage] = useState("")

    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = process.env.REACT_APP_USER_ID;

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form sent successfully!");
          }).catch(err => console.error(`Something went wrong ${err}`));
      }

    return (
        <div id="contact" className="contacts">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>
                    
                </p>
                <span className="success-message">{ successMessage }</span>
            </div>
            <div className="container">
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                                <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    ref={
                                        register({
                                            required:"Please Enter Your Name",
                                            maxLength: {
                                                value: 30,
                                                message: "Name is too long, please enter a name shorter than 30 character"
                                            }
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                { errors.name && errors.name.message }
                            </span>
                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input
                                    type="phone"
                                    className="form-control"
                                    placeholder="Phone Number (Optional)"
                                    name="phone"
                                />
                                <div className="line"></div>
                            </div>
                            {/* Email INPUT */}
                            <div className="text-center">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    ref={
                                        register({
                                            required:"Please Enter a valid email address",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Email is invalid"                  
                                            }
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                { errors.email && errors.email.message }
                            </span>
                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    ref={
                                        register({
                                            required:"Please provide a subject for your message",
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                { errors.subject && errors.subject.message }
                            </span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION */}
                            <div className="text-center">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="In a few words, describe your project..."
                                    name="description"
                                    ref={
                                        register({
                                            required:"Description required",
                                        })
                                    }
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                { errors.description && errors.description.message }
                            </span>
                            <button className="btn-main-offer contact-btn" type="submit">SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact

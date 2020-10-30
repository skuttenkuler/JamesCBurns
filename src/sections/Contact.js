import React from 'react';
import emailjs from 'emailjs-com';
import { BiChevronDownCircle } from 'react-icons/bi';
import { BiChevronUpCircle } from 'react-icons/bi';

export default function ContactSection(){

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
}
    return(
        <div className="container">
        <div id="contact-section" className="section">
            <div className="main-container">
                <h1>Contact</h1>
                <BiChevronDownCircle className="openButton"/>
            </div>
        </div>
        <div id="contact-dropdown" className="section-dropdown">
            <BiChevronUpCircle className="closeButton"/>
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="container">
                    <div className="col-6 pt-5 mx-auto">
                        <input type="text" className="form-control"  placeholder="Name" name="name" />
                    </div>
                    <div className="col-6 form-group pt-2 mx-auto">
                        <input type="email" className="form-control"  placeholder="Email Address" name="email" />
                    </div>
                    <div className="col-6 form-group pt-2 mx-auto">
                        <input type="text" className="form-control"  placeholder="Subject" name="subject" />
                    </div>
                    <div className="col-6 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" row="8" placeholder="Your message.." name="message" />                   
                    </div>
                    <div>
                        <input type="submit" className="btn btn-info" value="Send Message" />
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
};
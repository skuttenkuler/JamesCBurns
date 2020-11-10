import React from 'react';
import emailjs from 'emailjs-com';

import { BiChevronUpCircle } from 'react-icons/bi';

export default class ContactSection extends React.Component{
    state = {
        display: false,
    }

    render(){
    const {display} = this.state;
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
        <div>
            <div id="contact-section" className="section">
                <div className="main-container">
                    <h2>Contact</h2>
                    <a href="#contact-dropdown"><span className="openButton" onClick={() => this.setState({ display : !display})}>Click Here</span></a>
                </div>
            </div>
            {display
            ?
            <div id="contact-dropdown" className="section-dropdown">
                <a href="#contact-section"><BiChevronUpCircle className="closeButton" onClick={() => this.setState({ display : !display})}/></a>
                <form className="contact-form" onSubmit={sendEmail}>
                    <div>
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
            :
            null
            }
        
    </div>
    )
}};
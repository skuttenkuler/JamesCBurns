import React from 'react';

import { BiChevronUpCircle } from 'react-icons/bi';


export default class ContactSection extends React.Component{
    state = {
        display: false,
    }
    
    render(){
    const {display} = this.state;
    return(
        <div id="getintouch">
            <div id="contact-section" className="section">
                <div className="main-container">
                    <h2>Contact</h2>
                    <a href="#contact-dropdown"><span className="openButton" onClick={() => this.setState({ display : !display})}>GET IN TOUCH</span></a>
                </div>
            </div>
            {display
            ?
            <div id="contact-dropdown" className="section-dropdown">
                <a href="#contact-section"><BiChevronUpCircle className="closeButton" onClick={() => this.setState({ display : !display})}/></a>
                <br/>
                <br/>
                <br/>   
                <p className="contact-email">At: icewater1@icloud.com</p>
                <p>Or through Ice Water Productions.</p>
                <a href="https://icewaterproductions.com/contact"><p></p><img id="contact-image" src="https://jimmyburns.s3-us-west-1.amazonaws.com/icewaterlogoIce1.png" alt="icewater"></img></a>
            </div>
            :
            null
            }
        
    </div>
    )
}};
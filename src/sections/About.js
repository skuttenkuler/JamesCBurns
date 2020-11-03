import React from 'react';

import { BiChevronDownCircle } from 'react-icons/bi';
import { BiChevronUpCircle } from 'react-icons/bi';

export default class AboutSection extends React.Component{
    state = { 
        display: false,
    }
    render(){
        const {display} = this.state;
        return(
            <div>
                <div className="parallax-container">
                    <div id="about-section" className="section">
                        <div className="main-container">
                            <h1>About</h1>
                            <a href="#about-container"><BiChevronDownCircle className="openButton"  onClick={() => this.setState({ display : !display})}/></a>
                        </div>
                    </div>
                </div>
                
                { display 
                    ? 
                    <div id="about-container" className="container">
                    <a href="#about-section"><BiChevronUpCircle className="closeButton" onClick={() => this.setState({ display : !display})}/></a>
                        <div className="row">
                            <div className="intro-col col-3">
                                <h4>Introduction</h4>
                                <br/>
                                <div className="intro-container">
                                <p>asdfl;kjasdf;lkjasdf;lkjasdf;lkjasdfkjbasdkljbasdlkvjbasdlkvjbkjabsdlvkjbasdlkvjbasdlkvjbasdlkjvbasldkjvbas</p>
                                </div>
                            </div>
                            <div className="col-3 offset-1">
                                <h4>Filmography</h4>
                            </div>
                            <div className="col-3">
                                <h4>Television</h4>
                            </div>
                            <div className="col-2">
                                <h4>Gaming</h4>
                            </div>
        
                        </div> 
                    </div>
                    :
                    null
                }
            </div>
            
        )
    }
    
}


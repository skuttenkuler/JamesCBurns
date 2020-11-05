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
                            <h2>About</h2>
                            <a href="#about-container"><BiChevronDownCircle className="openButton"  onClick={() => this.setState({ display : !display})}/></a>
                        </div>
                    </div>
                </div>
                
                { display 
                    ? 
                    <div id="about-container" className="container">
                        <a href="#about-section"><BiChevronUpCircle className="closeButton" onClick={() => this.setState({ display : !display})}/></a>
                        <div id="about-row"className="row">
                            <div className="intro-col col-4">
                                <h4>Introduction</h4>
                                <div className="intro-container">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            <div className="col-3 offset-1">
                                <h4>Filmography</h4>
                                <br/>
                                <ul>
                                    <li>Movie 1 (2009)</li>
                                    <li>Movie 1 (2009)</li>
                                    <li>Movie 1 (2009)</li>
                                    <li>Movie 1 (2009)</li>
                                    <li>Movie 1 (2009)</li>
                                    <li>Movie 1 (2009)</li>
                                    <li>Movie 1 (2009)</li>
                                    <li>Movie 1 (2009)</li>
                                    <li>Movie 1 (2009)</li>

                                </ul>
                            </div>
                            <div className="col-3">
                                <h4>Television</h4>
                                <br/>
                                <ul>
                                    <li>TV-Show 1 (2009)</li>
                                    <li>TV-Show 1 (2009)</li>
                                    <li>TV-Show 1 (2009)</li>
                                    <li>TV-Show 1 (2009)</li>
                                    <li>TV-Show 1 (2009)</li>
                                    <li>TV-Show 1 (2009)</li>
                                    <li>TV-Show 1 (2009)</li>
                                    <li>TV-Show 1 (2009)</li>
                                    <li>TV-Show 1 (2009)</li>

                                </ul>
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


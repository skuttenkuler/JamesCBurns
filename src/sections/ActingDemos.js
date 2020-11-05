import React from 'react';
import ReactPlayer from 'react-player';

import { BiChevronDownCircle } from 'react-icons/bi';
import { BiChevronUpCircle } from 'react-icons/bi';


export default class ActingDemosSection extends React.Component{
    state = { 
        display: false,
    }
    render(){
        const {display} = this.state;
        return(
            <div>
                <div id="demos-section" className="section">
                    <div className="main-container">
                        <h2>Acting Demos</h2>
                        <a href="#demos-dropdown"><BiChevronDownCircle className="openButton" onClick={() => this.setState({ display : !display})}/></a>
                    </div>
                </div>
                { display 
                        ? 
                        <div id="demos-dropdown" className="section-dropdown">
                            <a href="#demos-section"><BiChevronUpCircle className="closeButton" onClick={() => this.setState({ display : !display})}/></a>
                            <div className="demo-vids">
                                <div className="row justify-content-center">
                                    <div className="video-block col">
                                        <ReactPlayer url="https://www.youtube.com/watch?v=85Ye4f9qHS8&ab_channel=JamesCBurnsDemoLibrary"/>
                                    </div>
                                    <div className="vid-text">
                                        <a href="https://www.youtube.com/channel/UC-jadcXP5ENw54Hs8arNS9Q/videos"><p>View All Demos</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }
        </div>
        )
    }
};
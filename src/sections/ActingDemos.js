import React from 'react';
import ReactPlayer from 'react-player';

export default class ActingDemosSection extends React.Component{
    render(){
        return(
            <div>
                <div id="demos-section" className="section">
                <h2>Acting Demos</h2>
                    <div className="main-container">
                       
                    </div>
                </div> 
                        <div id="demos-dropdown" className="section-dropdown">
                            <div className="demo-vids">
                                <div className="row">
                                    <div className="col">
                                        <ul>
                                            
                                        </ul>
                                    </div>
                                    <div className="video-block col">
                                        <ReactPlayer url="https://www.youtube.com/watch?v=85Ye4f9qHS8&ab_channel=JamesCBurnsDemoLibrary"/>
                                    </div>
                                </div>
                                    <div className="vid-text">
                                        <a href="https://www.youtube.com/channel/UC-jadcXP5ENw54Hs8arNS9Q/videos"><h2>View All Demos</h2></a>
                                    </div>
                            </div>
                        </div>
        </div>
        )
    }
};
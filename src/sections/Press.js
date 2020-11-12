import React from 'react';


import { BiChevronUpCircle } from 'react-icons/bi';
import { BsTrophy } from 'react-icons/bs';
export default class PressSection extends React.Component{
    state = { 
        display: false,
    }
    render(){
        const {display} = this.state;
        return(
            <div>
                <div id="press-section" className="section">
                    <div className="main-container">
                        <h2 className="press-header">Press</h2>
                        <a id="press-click-button" href="#press-dropdown" onClick={() => this.setState({ display : !display})}>Click Here</a>
                    </div>
                </div>
                { display 
                        ? 
                        <div id="press-dropdown" className="section-dropdown">
                            <a href="#press-section"><BiChevronUpCircle className="closeButton" onClick={() => this.setState({ display : !display})}/></a>
                            <div className="row">
                                <div className="col-md-4 col-xs-1 col-sm-1">
                                    <a href="https://www.makeuseof.com/tag/interview-james-c-burns-call-duty-black-ops/"><img src="https://jimmyburns.s3-us-west-1.amazonaws.com/Screen+Shot+2020-11-03+at+9.10.17+AM.png" alt="press"/></a>
                                </div>
                                <div className="col-md-4 col-xs-1 col-sm-1">
                                  <a href="http://www.offdutygamers.com/2013/02/spartan117gw-meets-sgt-frank-woods/"><img src="https://jimmyburns.s3-us-west-1.amazonaws.com/Screen+Shot+2020-11-03+at+8.54.23+AM.png" alt="press"/></a>
                                </div>
                                <div className="col-md-4 col-xs-1 col-sm-1">
                                    <a href="https://www.forbes.com/sites/johngaudiosi/2012/11/14/actor-james-burns-explains-why-sergeant-frank-woods-sucks-at-call-of-duty-black-ops-ii/?sh=64b2cb597fa3" ><img src="https://jimmyburns.s3-us-west-1.amazonaws.com/Screen+Shot+2020-11-03+at+8.55.19+AM.png" alt="press"/></a>
                                </div>
                            </div>
                                <h2 className="awards-header">Awards</h2>
                            <div className="row justify-content-center awards-row">
                                <div className="col-md-3 col-sm-1 col-xs-1">
                                    <div className="award-block">
                                    <BsTrophy id="trophy-icon"/>
                                    <p>2016 International Filmaker Festival of World Cinema, London
                                            <br/>Courier X as "Walter Broadnax"			
                                            <br/>Best Lead Actor</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-1 col-xs-1">
                                <div className="award-block">
                                    <BsTrophy id="trophy-icon"/>
                                        <p>Call Of Duty Fan Vote  2012</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-1 col-xs-1">
                                <div className="award-block">
                                    <BsTrophy id="trophy-icon"/>
                                    <p>2012 Character Of the Year
                                            <br/>For the Role of SGT. FRANK WOODS from Call of Duty: Black Ops Played by James C Burns</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-1 col-xs-1">
                                    <div className="award-block">
                                    <BsTrophy id="trophy-icon"/>
                                    <p> 2010 Spike Video Game Awards
                                            <br/>Character of the Year For the Role of SGT. FRANK WOODS from Call of Duty: Black Ops Played by James C Burns</p>
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
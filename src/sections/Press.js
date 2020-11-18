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
                                <div className="col-md-3 col-xs-1 col-sm-1">
                                    <a href="https://www.nytimes.com/2014/08/15/movies/coldwater-a-brutal-tale-of-juvenile-lockup.html" ><img src="https://jimmyburns.s3-us-west-1.amazonaws.com/nytimes.png" alt="press"/><p>New York Times</p></a>
                                </div>
                                <div className="col-md-3 col-xs-1 col-sm-1">
                                    <a href="https://www.huffpost.com/entry/moca-answers-the-call-of-_b_779337"><img src="https://jimmyburns.s3-us-west-1.amazonaws.com/huff.png" alt="press"/><p>Huffington Post</p></a>
                                </div>
                                <div className="col-md-3 col-xs-1 col-sm-1">
                                    <a href="https://www.makeuseof.com/tag/interview-james-c-burns-call-duty-black-ops/"><img src="https://jimmyburns.s3-us-west-1.amazonaws.com/Screen+Shot+2020-11-03+at+9.10.17+AM.png" alt="press"/><p>Make Use Of</p></a>
                                </div>
                                <div className="col-md-3 col-xs-1 col-sm-1">
                                    <a href="https://www.forbes.com/sites/johngaudiosi/2012/11/14/actor-james-burns-explains-why-sergeant-frank-woods-sucks-at-call-of-duty-black-ops-ii/?sh=64b2cb597fa3" ><img src="https://jimmyburns.s3-us-west-1.amazonaws.com/forbes.png" alt="press"/><p>Forbes</p></a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-xs-1 col-sm-1">
                                    <a href="https://www.complex.com/pop-culture/2011/02/the-man-who-would-be-woods-a-conversation-with-james-c-burns-of-black-ops"><img src="https://jimmyburns.s3-us-west-1.amazonaws.com/complex.png" alt="press"/><p>Complex</p></a>
                                </div>
                                <div className="col-md-3 col-xs-1 col-sm-1">
                                  <a href="https://moviesgamesandtech.com/2013/06/30/exclusive-interview-with-james-c-burns-the-voice-of-sgt-woods-from-black-ops-at-e3-2013/"><img src="https://jimmyburns.s3-us-west-1.amazonaws.com/mgandt.png" alt="press"/><p>Movies, Games, and Tech</p></a>
                                </div>
                                <div className="col-md-3 col-xs-1 col-sm-1">
                                    <a href="http://www.gamertagradio.com/2011/08/sgt-frank-woods-interview-call-of-duty-black-ops/" ><img src="https://jimmyburns.s3-us-west-1.amazonaws.com/gtradio.png" alt="press"/><p>Gamertag Radio</p></a>
                                </div>
                                <div className="col-md-3 col-xs-1 col-sm-1">
                                  <a href="http://www.offdutygamers.com/2013/02/spartan117gw-meets-sgt-frank-woods/"><img src="https://jimmyburns.s3-us-west-1.amazonaws.com/Screen+Shot+2020-11-03+at+8.54.23+AM.png" alt="press"/><p>Off Duty Gamers</p></a>
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
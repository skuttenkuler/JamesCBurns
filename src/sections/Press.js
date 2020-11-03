import React from 'react';

import { BiChevronDownCircle } from 'react-icons/bi';
import { BiChevronUpCircle } from 'react-icons/bi';

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
                        <h1>Press</h1>
                        <a href="#press-dropdown"><BiChevronDownCircle className="openButton" onClick={() => this.setState({ display : !display})}/></a>
                    </div>
                </div>
                { display 
                        ? 
                        <div id="press-dropdown" className="section-dropdown">
                            <a href="#press-section"><BiChevronUpCircle className="closeButton" onClick={() => this.setState({ display : !display})}/></a>
                            <div className="row">
                                <div className="col-4">
                                    <a href="https://www.makeuseof.com/tag/interview-james-c-burns-call-duty-black-ops/"><img src="https://jimmyburns.s3-us-west-1.amazonaws.com/Screen+Shot+2020-11-03+at+9.10.17+AM.png" alt="press"/></a>
                                </div>
                                <div className="col-4">
                                  <a href="http://www.offdutygamers.com/2013/02/spartan117gw-meets-sgt-frank-woods/"><img src="https://jimmyburns.s3-us-west-1.amazonaws.com/Screen+Shot+2020-11-03+at+8.54.23+AM.png" alt="press"/></a>
                                </div>
                                <div className="col-4">
                                    <a href="https://www.forbes.com/sites/johngaudiosi/2012/11/14/actor-james-burns-explains-why-sergeant-frank-woods-sucks-at-call-of-duty-black-ops-ii/?sh=64b2cb597fa3" ><img src="https://jimmyburns.s3-us-west-1.amazonaws.com/Screen+Shot+2020-11-03+at+8.55.19+AM.png" alt="press"/></a>
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
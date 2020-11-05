import React from 'react';

import { BiChevronDownCircle } from 'react-icons/bi';
import { BiChevronUpCircle } from 'react-icons/bi';

export default class CODSection extends React.Component{
    state = { 
        display: false,
    }
    render(){
        const {display} = this.state;
        return(
            <div>
                <div className="parallax-container">
                    <div id="cod-section" className="section">
                        <div className="main-container">
                            <h2>Call of Duty</h2>
                            <a href="#cod-container"><BiChevronDownCircle className="openButton"  onClick={() => this.setState({ display : !display})}/></a>
                        </div>
                    </div>
                </div>
                
                { display 
                    ? 
                    <div id="cod-container">
                        <a href="#cod-section"><BiChevronUpCircle className="closeButton" onClick={() => this.setState({ display : !display})}/></a>
                        <div id="cod-row" className="row">
                            <div className="col-sm">
                                <h4>Black Ops</h4> 
                                <div className="cod-game-image">
                                    <a href="https://www.callofduty.com/blackops"><img src="https://jimmyburns.s3-us-west-1.amazonaws.com/cod.png" alt="codimage"/></a>
                                </div>
                            </div>
                            <div className="col-sm">
                                <h4>Black Ops II</h4>
                                <div className="cod-game-image">
                                    <a href="https://www.callofduty.com/blackops2"><img src="https://jimmyburns.s3-us-west-1.amazonaws.com/cod2.jpg" alt="codimage"/></a>
                                </div>
                            </div>
                            <div className="col-sm">
                                <h4>Black Ops IV</h4>
                                <div className="cod-game-image">
                                    <a href="https://www.callofduty.com/blackops4"><img src="https://jimmyburns.s3-us-west-1.amazonaws.com/cod4.jpg" alt="codimage"/></a>
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
    
}


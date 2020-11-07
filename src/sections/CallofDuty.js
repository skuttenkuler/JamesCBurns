import React from 'react';


export default class CODSection extends React.Component{
    render(){
        
        return(
            <div>
                <h2>Call of Duty</h2>
                    <div id="cod-container">
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
                        <div className='row'>
                            <div className="col">
                                <h2> SRGT Frank Woods</h2>
                                <img id="srgt-frank" src="https://jimmyburns.s3-us-west-1.amazonaws.com/frankwoods.jpg" alt="frank woods"></img>
                            </div>
                        </div>
                    </div>
            </div>
            
        )
    }
    
}


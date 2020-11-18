import React from 'react';
import ReactPlayer from 'react-player'

export default class CODSection extends React.Component{
    render(){
        
        return(
            <div id="cod">
                <div id="cod-demo"className="container master-demo-container">
                    <div className="row">
                        <div className="master-demo-col">
                            <h2 className="main-char-header"> Call of Duty: Black Ops </h2>
                            <ReactPlayer url='https://www.youtube.com/watch?v=i0EHaquOH2Q&ab_channel=JamesCBurnsDemoLibrary' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="master-demo-col">
                            <h2 className="main-char-header"> Sgt Frank Woods Cameo </h2>
                            <div>
                                <a href="https://www.cameo.com/5ef287a799be7b00268724a4">
                                    <img id="cod-cameo"src="https://jimmyburns.s3-us-west-1.amazonaws.com/cameo-logo.png" alt=""cameo/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                    <div id="cod-container">
                        <div id="cod-row" className="row">
                            <div className="col-sm">
                                <h4>Black Ops</h4> 
                                <div className="cod-game-image">
                                    <a href="https://www.youtube.com/watch?v=CNCVdaEm5Ao&ab_channel=SARGE%27SCORNER"><img src="https://jimmyburns.s3-us-west-1.amazonaws.com/cod.png" alt="codimage"/></a>
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
                                <h2 className="cod-srgt-header"> SRGT Frank Woods</h2>
                                <img id="srgt-frank" src="https://jimmyburns.s3-us-west-1.amazonaws.com/frankwoods.jpg" alt="frank woods"></img>
                            </div>
                        </div>
                    </div>
            </div>
            
        )
    }
    
}


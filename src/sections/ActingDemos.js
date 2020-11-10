import React from 'react';
import ModalVideo from 'react-modal-video';
import ReactPlayer from 'react-player'
export default class ActingDemosSection extends React.Component{
    //set state to false initially
    constructor(){
        super()
        this.state = {
            isOpen:false
        }
        this.openModal = this.openModal.bind(this)
    }
    //open modal function when state changes
    openModal(){
        this.setState({isOpen: true})
    }
    render(){
        return(
           
                <div id="demos-section" className="section">
                
                <h2 id="char-header"> Character Demos</h2>
                            <div className="container character-container">
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 main-demo-col">
                                        <h2 className="main-char-header"> Main Demo </h2>
                                        <ReactPlayer url='https://www.youtube.com/watch?v=i5CHg5YlqnA&list=PLSyh-q5pbVOWK1FY1FJmJg-1DZE3w6fkZ&index=9&ab_channel=JamesCBurnsDemoLibrary' />
                                            <p>Commercials</p>
                                    </div>
                                
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 character-col">
                                        <React.Fragment>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='aljC2Esqgl4' onClose={() => this.setState({isOpen: false})} />
                                            <img alt="demo"className="demo-vid-img" src="https://jimmyburns.s3-us-west-1.amazonaws.com/pain.png" onClick={this.openModal}/>
                                        </React.Fragment>
                                            <p>Guys in Pain</p>
                                        <React.Fragment>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='6z9Xjm6Eac8' onClose={() => this.setState({isOpen: false})} />
                                            <img alt="demo"className="demo-vid-img" src="https://jimmyburns.s3-us-west-1.amazonaws.com/Soldier.png" onClick={this.openModal}/>
                                        </React.Fragment>
                                            <p>Soldiers</p>
                                        <React.Fragment>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='HjzUSSxlCdo' onClose={() => this.setState({isOpen: false})} />
                                            <img alt="demo"className="demo-vid-img" src="https://jimmyburns.s3-us-west-1.amazonaws.com/MenInPower.png" onClick={this.openModal}/>
                                        </React.Fragment>
                                            <p>Men in Power</p>
                                        <React.Fragment>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='sn8i_FbEpOU' onClose={() => this.setState({isOpen: false})} />
                                            <img alt="demo"className="demo-vid-img" src="https://jimmyburns.s3-us-west-1.amazonaws.com/Leadership.png" onClick={this.openModal}/>
                                        </React.Fragment>
                                            <p>Leadership</p>
                                        <React.Fragment>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='SsDUK7zexJs' onClose={() => this.setState({isOpen: false})} />
                                            <img alt="demo"className="demo-vid-img" src="https://jimmyburns.s3-us-west-1.amazonaws.com/Law.png" onClick={this.openModal}/>

                                        </React.Fragment>
                                            <p>Law Enforement</p>
                                    </div>
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 character2-col">
                                        <React.Fragment>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='EEtvc1XQIDQ' onClose={() => this.setState({isOpen: false})} />
                                            <img alt="demo"className="demo-vid-img" src="https://jimmyburns.s3-us-west-1.amazonaws.com/Family.png" onClick={this.openModal}/>
                                        </React.Fragment>
                                            <p>Family Man</p>
                                        <React.Fragment>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='0Mt74OWyg0A' onClose={() => this.setState({isOpen: false})} />
                                            <img alt="demo"className="demo-vid-img" src="https://jimmyburns.s3-us-west-1.amazonaws.com/DrunkandAngry.png" onClick={this.openModal}/>

                                        </React.Fragment>
                                            <p>Drunk and Angry</p>
                                        <React.Fragment>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='7NsgtilpxTM' onClose={() => this.setState({isOpen: false})} />
                                            <img alt="demo"className="demo-vid-img" src="https://jimmyburns.s3-us-west-1.amazonaws.com/Cowboy.png" onClick={this.openModal}/>

                                        </React.Fragment>
                                            <p>Cowboys</p>
                                        <React.Fragment>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='qsKh1VXtQEg' onClose={() => this.setState({isOpen: false})} />
                                            <img alt="demo"className="demo-vid-img" src="https://jimmyburns.s3-us-west-1.amazonaws.com/BlueCollar.png" onClick={this.openModal}/>

                                        </React.Fragment>
                                            <p>Blue Collar</p>
                                        <React.Fragment>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='6WGaoFbnDCU' onClose={() => this.setState({isOpen: false})} />
                                            <img alt="demo"className="demo-vid-img" src="https://jimmyburns.s3-us-west-1.amazonaws.com/Dangerous.png" onClick={this.openModal}/>

                                        </React.Fragment>
                                            <p>Dangerous Guys</p>
                                            
                                        </div>
                                    </div>
                            </div>
                        </div>

        )
    }
};
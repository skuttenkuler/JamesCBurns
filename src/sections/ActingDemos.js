import React from 'react';
import ModalVideo from 'react-modal-video';

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
            <div>
                <div id="demos-section" className="section">
                <h2>Acting Demos</h2>
                    <div className="container">
                       <div classNames="row">
                           <div className="col-4">
                               <h2> Character Demos</h2>
                               <React.Fragment>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='aljC2Esqgl4' onClose={() => this.setState({isOpen: false})} />
                                    <button className="video-button" onClick={this.openModal}>Open</button>
                                </React.Fragment>
                                    <p>Guys in Pain</p>
                                <React.Fragment>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='6z9Xjm6Eac8' onClose={() => this.setState({isOpen: false})} />
                                    <button className="video-button" onClick={this.openModal}>Open</button>
                                </React.Fragment>
                                    <p>Soldiers</p>
                                <React.Fragment>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='HjzUSSxlCdo' onClose={() => this.setState({isOpen: false})} />
                                    <button className="video-button" onClick={this.openModal}>Open</button>
                                </React.Fragment>
                                    <p>Men in Power</p>
                                <React.Fragment>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='sn8i_FbEpOU' onClose={() => this.setState({isOpen: false})} />
                                    <button className="video-button" onClick={this.openModal}>Open</button>
                                </React.Fragment>
                                    <p>Leadership</p>
                                <React.Fragment>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='SsDUK7zexJs' onClose={() => this.setState({isOpen: false})} />
                                    <button className="video-button" onClick={this.openModal}>Open</button>
                                </React.Fragment>
                                    <p>Law Enforement</p>
                                <React.Fragment>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='EEtvc1XQIDQ' onClose={() => this.setState({isOpen: false})} />
                                    <button className="video-button" onClick={this.openModal}>Open</button>
                                </React.Fragment>
                                    <p>Family Man</p>
                                <React.Fragment>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='0Mt74OWyg0A' onClose={() => this.setState({isOpen: false})} />
                                    <button className="video-button" onClick={this.openModal}>Open</button>
                                </React.Fragment>
                                    <p>Drunk and Angry</p>
                                <React.Fragment>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='7NsgtilpxTM' onClose={() => this.setState({isOpen: false})} />
                                    <button className="video-button" onClick={this.openModal}>Open</button>
                                </React.Fragment>
                                    <p>Cowboys</p>
                                <React.Fragment>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='qsKh1VXtQEg' onClose={() => this.setState({isOpen: false})} />
                                    <button className="video-button" onClick={this.openModal}>Open</button>
                                </React.Fragment>
                                    <p>Blue Collar</p>
                                <React.Fragment>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='6WGaoFbnDCU' onClose={() => this.setState({isOpen: false})} />
                                    <button className="video-button" onClick={this.openModal}>Open</button>
                                </React.Fragment>
                                    <p>Dangerous Guys</p>
                           </div>
                           <div className="col-8">
                                <h2> Main Demo </h2>
                                <React.Fragment>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='i5CHg5YlqnA' onClose={() => this.setState({isOpen: false})} />
                                    <button className="video-button" onClick={this.openModal}>Open</button>
                                </React.Fragment>
                                    <p>Commercials</p>
                           </div>
                       </div>

                    </div>
                </div> 
                       
        </div>
        )
    }
};
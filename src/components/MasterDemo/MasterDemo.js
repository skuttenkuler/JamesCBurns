import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
export default class MasterDemo extends Component{
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
            <div className ="commercials-vid">
                <ModalVideo channel='vimeo' isOpen={this.state.isOpen} videoId='264708417' onClose={() => this.setState({isOpen: false})} />
                <img alt="demo"className="demo-vid-img" src="https://jimmyburns.s3-us-west-1.amazonaws.com/MasterDemoImg.png" onClick={this.openModal}/>
            </div>
        )
    }
   
};
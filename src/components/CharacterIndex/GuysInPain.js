import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
export default class GuysInPain extends Component{
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
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='aljC2Esqgl4' onClose={() => this.setState({isOpen: false})} />
                <img alt="demo"className="demo-vid-img vid1" src="https://jimmyburns.s3-us-west-1.amazonaws.com/pain.png" onClick={this.openModal}/>
                <p>Guys in Pain</p>
            </div>
        )
    }
   
};
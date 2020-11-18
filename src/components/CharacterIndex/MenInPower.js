import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
export default class MenInPower extends Component{
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
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='HjzUSSxlCdo' onClose={() => this.setState({isOpen: false})} />
                <img alt="demo"className="demo-vid-img" src="https://jimmyburns.s3-us-west-1.amazonaws.com/MenInPower.png" onClick={this.openModal}/>
                <p>Men in Power</p>
            </div>
        )
    }
   
};
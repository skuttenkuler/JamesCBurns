import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
export default class FamilyMan extends Component{
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
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='EEtvc1XQIDQ' onClose={() => this.setState({isOpen: false})} />
                <img alt="demo"className="demo-vid-img" src="https://jimmyburns.s3-us-west-1.amazonaws.com/Family.png" onClick={this.openModal}/>
                <p>Family Man</p>
            </div>
        )
    }
   
};
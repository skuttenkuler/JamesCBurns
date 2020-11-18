import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
export default class Soldiers extends Component{
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
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='6z9Xjm6Eac8' onClose={() => this.setState({isOpen: false})} />
                <img alt="demo"className="demo-vid-img" src="https://jimmyburns.s3-us-west-1.amazonaws.com/Soldier.png" onClick={this.openModal}/>
                <p>Soldiers</p>
            </div>
        )
    }
   
};
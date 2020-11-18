import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
export default class Commercials extends Component{
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
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='i5CHg5YlqnA' onClose={() => this.setState({isOpen: false})} />
                <img alt="demo"className="demo-vid-img" src="https://jimmyburns.s3-us-west-1.amazonaws.com/commercials.png" onClick={this.openModal}/>
            </div>
        )
    }
   
};
import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
export default class BlueCollar extends Component{
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
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='qsKh1VXtQEg' onClose={() => this.setState({isOpen: false})} />
                <img alt="demo"className="demo-vid-img" src="https://jimmyburns.s3-us-west-1.amazonaws.com/BlueCollar.png" onClick={this.openModal}/>
                <p>Blue Collar</p>
            </div>
        )
    }
   
};
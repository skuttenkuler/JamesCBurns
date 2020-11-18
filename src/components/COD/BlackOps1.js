import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
export default class BlackOpsI extends Component{
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
                <div className="cod-game-image">
                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='CNCVdaEm5Ao' onClose={() => this.setState({isOpen: false})} />
                            <img alt="demo"className="demo-vid-img" src="https://jimmyburns.s3-us-west-1.amazonaws.com/cod.png" onClick={this.openModal}/>
                </div>
            </div>
        )
    }
   
};
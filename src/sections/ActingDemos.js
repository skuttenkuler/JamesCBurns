import React from 'react';
import ReactPlayer from 'react-player'
import Fade from 'react-reveal/Fade';

import GuysInPain from '../components/CharacterIndex/GuysInPain'
import Soldiers from '../components/CharacterIndex/Soldiers';
import MenInPower from '../components/CharacterIndex/MenInPower';
import Leadership from '../components/CharacterIndex/Leadership';
import LawEnforcement from '../components/CharacterIndex/LawEnforcement';
import FamilyMan from '../components/CharacterIndex/FamilyMan';
import DrunkAndAngry from '../components/CharacterIndex/DrunkAndAngry';
import Cowboys from '../components/CharacterIndex/Cowboys';
import BlueCollar from '../components/CharacterIndex/BlueCollar';
import DangerousGuys from '../components/CharacterIndex/DangerousGuys';
import Academics from '../components/CharacterIndex/Academics';
import Commercials from '../components/Commercials/Commercials';
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
            <Fade bottom big>
                <div id="demos-section" className="section">
                            
                            <div className="container character-container">
                                <h2 id="main-char-header"> Character Index</h2>
                                <div className="row">
                                    <div className="col character-col">
                                        <GuysInPain/>
                                        <Soldiers/>
                                        <MenInPower/>
                                        <Leadership/>
                                        <LawEnforcement/>
                                    </div>
                                    <div className="col character2-col">
                                            <FamilyMan/>
                                            <DrunkAndAngry/>
                                            <Cowboys/>
                                            <BlueCollar/>
                                            <DangerousGuys/>
                                            <Academics/>
                                        </div>

                                    </div>
                            <div id="commerial-video" className="container commercials-container">
                                <div className="row">
                                    <div className="commercial-demo-col">
                                        <h2 className="main-char-header"> Commercials </h2>
                                        <Commercials/>
                                    </div>
                                </div>
                            </div>
                            <div id="master-demo"className="container master-demo-container">
                                <div className="row">
                                    <div className="master-demo-col">
                                        <h2 className="main-char-header"> Master Demo </h2>
                                        <ReactPlayer url='https://www.youtube.com/watch?v=i5CHg5YlqnA&list=PLSyh-q5pbVOWK1FY1FJmJg-1DZE3w6fkZ&index=9&ab_channel=JamesCBurnsDemoLibrary' />
                                    </div>
                                </div>
                            </div>
                                </div>
                        </div>
                        </Fade>

        )
    }
};



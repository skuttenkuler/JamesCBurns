import React from 'react';

import { BiChevronDownCircle } from 'react-icons/bi';
import { BiChevronUpCircle } from 'react-icons/bi';

export default class PressSection extends React.Component{
    state = { 
        display: false,
    }
    render(){
        const {display} = this.state;
        return(
            <div>
                <div id="press-section" className="section">
                    <div className="main-container">
                        <h1>Press</h1>
                        <a href="#press-dropdown"><BiChevronDownCircle className="openButton" onClick={() => this.setState({ display : !display})}/></a>
                    </div>
                </div>
                { display 
                        ? 
                        <div id="press-dropdown" className="section-dropdown">
                            <a href="#press-section"><BiChevronUpCircle className="closeButton" onClick={() => this.setState({ display : !display})}/></a>
                        </div>
                        :
                        null
                }
        </div>
        )
    }
};
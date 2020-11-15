import React from 'react';
import axios from 'axios'
import { BiChevronUpCircle } from 'react-icons/bi';

const API_PATH = "https://jamescburns.com/api/index.php"

export default class ContactSection extends React.Component{
    state = {
        display: false,
    }
    //email state
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            subject:"",
            message:"",
            mailsent:false,
            error: null,
        }
    }
    
    //eventhandler
    handleFormSubmit(e){
        e.preventDefault();
        console.log(this.state);
        axios({
            method:'post',
            url: `${API_PATH}`,
            headers: {'content-type': 'application/json'},
            data: this.state
        })
        .then(result => {
            this.setState({
                mailSent: result.data.sent
            })
        })
        .catch(error => this.setState({error: error.message}));
    }
    render(){
    const {display} = this.state;
    return(
        <div id="getintouch">
            <div id="contact-section" className="section">
                <div className="main-container">
                    <h2>Contact</h2>
                    <a href="#contact-dropdown"><span className="openButton" onClick={() => this.setState({ display : !display})}>GET IN TOUCH</span></a>
                </div>
            </div>
            {display
            ?
            <div id="contact-dropdown" className="section-dropdown">
                <a href="#contact-section"><BiChevronUpCircle className="closeButton" onClick={() => this.setState({ display : !display})}/></a>
                <form className="contact-form" action="/src/api/index.php">
                    <div>
                        <div className="col-6 pt-5 mx-auto">
                            <input type="text" 
                                    id="name" 
                                    className="form-control"  
                                    placeholder="Name" 
                                    name="name"
                                    value={this.state.name}
                                    onChange={e => this.setState({ name: e.target.value})} />
                        </div>
                        <div className="col-6 form-group pt-2 mx-auto">
                            <input type="email" 
                                    id="email" 
                                    className="form-control"  
                                    placeholder="Email Address" 
                                    name="email"
                                    value={this.state.email}
                                    onChange={e => this.setState({ email: e.target.value})} />
                        </div>
                        <div className="col-6 form-group pt-2 mx-auto">
                            <input type="text" 
                                    id="subject" 
                                    className="form-control"  
                                    placeholder="Subject" 
                                    name="subject" 
                                    value={this.state.subject}
                                    onChange={e => this.setState({ subject: e.target.value})} />
                        </div>
                        <div className="col-6 form-group pt-2 mx-auto">
                            <textarea className="form-control" 
                                        id="message" 
                                        cols="30" 
                                        row="8" 
                                        placeholder="Your message.." 
                                        name="message"
                                        value={this.state.message}
                                        onChange={e => this.setState({ message: e.target.value})}  />                   
                        </div>
                        <div>
                            <input type="submit" onClick={e => this.handleFormSubmit(e)} className="btn btn-info" value="Send Message" />
                        </div>
                    </div>
                    <div>
                        {this.state.mailSent &&
                            <div>Thank you! Message sent.</div>
                        }
                    </div>
                </form>
            </div>
            :
            null
            }
        
    </div>
    )
}};
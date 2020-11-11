import React from 'react';

import { BiChevronUpCircle } from 'react-icons/bi';

export default class AboutSection extends React.Component{
    state = { 
        display: false,
    }
    render(){
        const {display} = this.state;
        return(
            <div>
                <div className="parallax-container">
                    <div id="about-section" className="section">
                        <div className="main-container">
                            <h2>About</h2>
                            <a href="#about-container"><span className="openButton"  onClick={() => this.setState({ display : !display})}>Learn More</span></a>
                        </div>
                    </div>
                </div>
                
                { display 
                    ? 
                    <div id="about-container" className="container">
                        <a href="#about-section"><BiChevronUpCircle className="closeButton" onClick={() => this.setState({ display : !display})}/></a>
                        <div id="about-row"className="row">
                            <div className="intro-col col-4">
                                <h4>Introduction</h4>
                                <div className="intro-container">
                                <p>
                                    James C Burns, a former professional Ice Hockey player and coach has appeared in hundreds of Films, TV Shows and Commercials. He is most widely known for his award winning role as SGT. FRANK WOODS in the wildly successful CALL of DUTY: BLACK OPS video game franchise.<br/>


                                    His 60 plus films credits range from Micheal Bays’ blockbuster hit TRANSFORMERS to the indie sensation MY SON MY SON directed by the iconic Werner Herzog. James’ resume includes several foreign language films. His travels brought him twice to Tokyo. In 2014 he worked on the award winning film JUDGE and in 2015 he work on the popular franchise film HERO in which all his dialog was in Japanese.<br/>


                                    James’ TV credits Include many recurring and guest appearances on shows like SWAT, ALL RISE, L.A.’S FINEST, HAWAII FIVE-O, COLD CASE, MAKE IT OR BREAK IT, CSI: NY, and CSI: CYBER and others. Fans of daytime Soaps may recognize James as the mysterious “Vaughan” from GENERAL HOSPITAL or from his powerful 2017 appearance on DAYS Of our LIVES as emotionally damaged homeless veteran WADE RICHARDSON.<br/>


                                    Many will also know him from the 100 plus commercials he has been in. Most notable are his campaigns for Viagra (Green Camero Guy) , Eliquis ( Guitar Playing Spokesman), Anthem Blue Cross (Guitar Playing Parent), Truck Driver Chuck from the Nordstroms Ads with Micheal Buble’, Head and Shoulders, Bud-Light, Audi and more.<br/>


                                    In addition to the traditional formats, James has a developed a presence within the digital and online communities thru his SARGE”S CORNER LIVESTREAM Youtube Channel. Internet acting appearances include Johanna & Khadi, Prom Queen, Stranger Adventures and Music Videos like WHAT HURTS the Most (Rascal Flatts), 20-20 SURGERY ( Taking Back Sunday) and FACES (Scary Kids Scaring Kids).<br/>


                                    James is also a writer and director. His Sci-FI action thriller TANGO DOWN is currently in pre-production. His awards include the: 2010 VGA Best Character Award. The 2012 Best Call Of Duty Character Award and The IFFWC Best Lead Actor award for Courier X. James unconditionally supports the men and women of the US Military and has had the honor of traveling with the USO to bases in Europe, Guam, and Afghanistan. James drives an FORD F-150 King Ranch and goes wherever the work will take him.<br/>
                                </p>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col">
                                <h4>Filmography</h4>
                                <br/>
                                <ul>
                                    <li>Movie 1 (2009)</li>
                                    <li>Movie 1 (2009)</li>
                                    <li>Movie 1 (2009)</li>
                                    <li>Movie 1 (2009)</li>
                                    <li>Movie 1 (2009)</li>
                                    <li>Movie 1 (2009)</li>
                                    <li>Movie 1 (2009)</li>
                                    <li>Movie 1 (2009)</li>
                                    <li>Movie 1 (2009)</li>

                                </ul>
                            </div>
                            <div className="col">
                                <h4>Television</h4>
                                <br/>
                                <ul>
                                    <li>TV-Show 1 (2009)</li>
                                    <li>TV-Show 1 (2009)</li>
                                    <li>TV-Show 1 (2009)</li>
                                    <li>TV-Show 1 (2009)</li>
                                    <li>TV-Show 1 (2009)</li>
                                    <li>TV-Show 1 (2009)</li>
                                    <li>TV-Show 1 (2009)</li>
                                    <li>TV-Show 1 (2009)</li>
                                    <li>TV-Show 1 (2009)</li>

                                </ul>
                            </div>
                            </div>
                        </div> 
                    </div>
                    :
                    null
                }
            </div>
            
        )
    }
    
}


import React from 'react';

import { BiChevronUpCircle } from 'react-icons/bi';

export default class AboutSection extends React.Component{
    state = { 
        display: false,
    }
    render(){
        const {display} = this.state;
        return(
            <div className="about-container-block">
                <div className="parallax-container">
                    <div id="about-section" className="section">
                        <div className="main-container">
                            <h1>About</h1>
                            <a href="#about-container"><span className="openButton"  onClick={() => this.setState({ display : !display})}>Learn More</span></a>
                        </div>
                    </div>
                </div>
                
                { display 
                    ? 
                    <div id="about-container" className="container">
                        <a href="#about-section"><BiChevronUpCircle className="closeButton" onClick={() => this.setState({ display : !display})}/></a>
                            <div className="bio">
                                <h4>Introduction</h4>
                                <div className="intro-container">
                                    <p>James C Burns, a former professional Ice Hockey player and coach has appeared in hundreds of Films, TV Shows and Commercials. He is most widely known for his award winning role as SGT. FRANK WOODS in the wildly successful CALL of DUTY: BLACK OPS video game franchise.</p><br/>
                                    <p>His 60 plus films credits range from Micheal Bays’ blockbuster hit TRANSFORMERS to the indie sensation MY SON MY SON directed by the iconic Werner Herzog. James’ resume includes several foreign language films. His travels brought him twice to Tokyo. In 2014 he worked on the award winning film JUDGE and in 2015 he work on the popular franchise film HERO in which all his dialog was in Japanese.</p>
                                    <br/>
                                    <p>James’ TV credits Include many recurring and guest appearances on shows like SWAT, ALL RISE, L.A.’S FINEST, HAWAII FIVE-O, COLD CASE, MAKE IT OR BREAK IT, CSI: NY, and CSI: CYBER and others. Fans of daytime Soaps may recognize James as the mysterious “Vaughan” from GENERAL HOSPITAL or from his powerful 2017 appearance on DAYS Of our LIVES as emotionally damaged homeless veteran WADE RICHARDSON.</p>
                                    <br/>
                                    <p>Many will also know him from the 100 plus commercials he has been in. Most notable are his campaigns for Viagra (Green Camero Guy) , Eliquis ( Guitar Playing Spokesman), Anthem Blue Cross (Guitar Playing Parent), Truck Driver Chuck from the Nordstroms Ads with Micheal Buble’, Head and Shoulders, Bud-Light, Audi and more.</p>
                                    <br/>
                                    <p>In addition to the traditional formats, James has a developed a presence within the digital and online communities thru his SARGE”S CORNER LIVESTREAM Youtube Channel. Internet acting appearances include Johanna & Khadi, Prom Queen, Stranger Adventures and Music Videos like WHAT HURTS the Most (Rascal Flatts), 20-20 SURGERY ( Taking Back Sunday) and FACES (Scary Kids Scaring Kids).</p>
                                    <br/>
                                    <p>James is also a writer and director. His Sci-FI action thriller TANGO DOWN is currently in pre-production. His awards include the: 2010 VGA Best Character Award. The 2012 Best Call Of Duty Character Award and The IFFWC Best Lead Actor award for Courier X. James unconditionally supports the men and women of the US Military and has had the honor of traveling with the USO to bases in Europe, Guam, and Afghanistan. James drives an FORD F-150 King Ranch and goes wherever the work will take him.</p>
                                    
                                </div>
                        <div id="about-row"className="row">
                            <div className="col col-xs-1 col-sm-1">
                                <h4>Filmography</h4>
                                <br/>
                                <ul>
                                    <li>A Pity (2020)</li>
                                    <li>Dangerous Words from the Fearless (2020)</li>
                                    <li>Bid Break (2019)</li>
                                    <li>Rhinestone Blue (2019)</li>
                                    <li>The Everlast (2019)</li>
                                    <li>Wake (2019)</li>
                                    <li>Am I a Serial Killer? (2019)</li>
                                    <li>Alien Harvest (2019)</li>
                                    <li>Believe (2016)</li>

                                </ul>
                            </div>
                            <div className="col col-xs-1 col-sm-1">
                                <h4>Television</h4>
                                <br/>
                                <ul>
                                    <li>L.A.'s Finest' (2020)</li>
                                    <li>Finding Love in Quarantine (2020)</li>
                                    <li>S.W.A.T. (2019)</li>
                                    <li>All Rise (2019)</li>
                                    <li>Dirt (2018-2019)</li>
                                    <li>Days of Our Lives (2017)</li>
                                    <li>Hawaii Five-0 (2015)</li>
                                    <li>CSI Cyber(2015)</li>
                                    <li>Criminal Minds (2006-2011)</li>

                                </ul>
                            </div>
                            <div className="col col-xs-1 col-sm-1">
                                <h4>Video Games</h4>
                                <br/>
                                <ul>
                                    <li>Yakuza: Like a Dragon (2020)</li>
                                    <li>Call of Duty: Black Ops IV (2018)</li>
                                    <li>Deep Down (2014)</li>
                                    <li>Call of Duty: Black Ops - Declassified (2012)</li>
                                    <li>Call of Duty: Black Ops II (2012)</li>
                                    <li>Call of Duty: Black Ops (2010)</li>

                                </ul>
                            </div>
                            </div>
                            <p>For full list visit my <a href="https://www.imdb.com/name/nm0122703/">IMDB</a></p>
                        </div> 
                    </div>
                    :
                    null
                }
            </div>
            
        )
    }
    
}


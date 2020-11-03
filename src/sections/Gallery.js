import React from 'react';
import Gallery from 'react-photo-gallery';
import { BiChevronDownCircle } from 'react-icons/bi';
import { BiChevronUpCircle } from 'react-icons/bi';

const photos = [
    {
        src: 'https://jimmyburns.s3-us-west-1.amazonaws.com/1.jpg',
        width: 1,
        height: 2
    },
    {
        src: 'https://jimmyburns.s3-us-west-1.amazonaws.com/3.jpeg',
        width: 1,
        height: 1 
    },
    {
        src: 'https://jimmyburns.s3-us-west-1.amazonaws.com/4.jpg',
        width: 2,
        height: 1 
    },
    {
        src: 'https://jimmyburns.s3-us-west-1.amazonaws.com/5.jpg',
        width: 1,
        height: 1 
    },
    {
        src: 'https://jimmyburns.s3-us-west-1.amazonaws.com/6.jpeg',
        width: 1,
        height: 1 
    },
    {
        src: 'https://jimmyburns.s3-us-west-1.amazonaws.com/7.jpg',
        width: 2,
        height: 1 
    },
    {
        src: 'https://jimmyburns.s3-us-west-1.amazonaws.com/8.jpg',
        width: 2,
        height: 1 
    },
    {
        src: 'https://jimmyburns.s3-us-west-1.amazonaws.com/9.jpeg',
        width: 1,
        height: 1 
    },
    {
        src: 'https://jimmyburns.s3-us-west-1.amazonaws.com/10.jpg',
        width: 2,
        height: 1 
    },
];
export default class GallerySection extends React.Component{
    state = {
        display: false,
    }
    render(){
        const {display} = this.state;
        return(
            <div>
                <div id="gallery-section" className="section">
                    <div className="main-container">
                        <h1>Gallery</h1>
                        <a href="#gallery-dropdown"><BiChevronDownCircle className="openButton" onClick={() => this.setState({ display : !display})}/></a>
                    </div>
                </div>
                { display 
                    ? 
                <div id="gallery-dropdown" >
                    <a href="#gallery-section"><BiChevronUpCircle className="closeButton" onClick={() => this.setState({ display : !display})}/></a>
                    <div className="gallery-container">
                        <Gallery photos={photos} />
                    </div>
                </div>
                :
                null
                }
            </div>
            );
    }
};

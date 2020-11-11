import React from 'react';
import ImageGallery from 'react-image-gallery';

import { BiChevronDownCircle } from 'react-icons/bi';
import { BiChevronUpCircle } from 'react-icons/bi';

const images = [
    {
        original: 'https://jimmyburns.s3-us-west-1.amazonaws.com/1.jpg',
        thumbnail:'https://jimmyburns.s3-us-west-1.amazonaws.com/1.jpg'
    },
    {
        original: 'https://jimmyburns.s3-us-west-1.amazonaws.com/3.jpeg',
        thumbnail:'https://jimmyburns.s3-us-west-1.amazonaws.com/3.jpeg'
    },
    {
        original: 'https://jimmyburns.s3-us-west-1.amazonaws.com/4.jpg',
        thumbnail:'https://jimmyburns.s3-us-west-1.amazonaws.com/4.jpg'
    },
    {
        original: 'https://jimmyburns.s3-us-west-1.amazonaws.com/5.jpg',
        thumbnail:'https://jimmyburns.s3-us-west-1.amazonaws.com/5.jpg'
    },
    {
        original: 'https://jimmyburns.s3-us-west-1.amazonaws.com/6.jpeg',
        thumbnail:'https://jimmyburns.s3-us-west-1.amazonaws.com/6.jpeg'
    },
    {
        original: 'https://jimmyburns.s3-us-west-1.amazonaws.com/7.jpg',
        thumbnail:'https://jimmyburns.s3-us-west-1.amazonaws.com/7.jpg'
    },
    {
        original: 'https://jimmyburns.s3-us-west-1.amazonaws.com/8.jpg',
        thumbnail:'https://jimmyburns.s3-us-west-1.amazonaws.com/8.jpg'
    },
    {
        original: 'https://jimmyburns.s3-us-west-1.amazonaws.com/9.jpeg',
        thumbnail:'https://jimmyburns.s3-us-west-1.amazonaws.com/9.jpeg'
    },
    {
        original: 'https://jimmyburns.s3-us-west-1.amazonaws.com/10.jpg',
        thumbnail:'https://jimmyburns.s3-us-west-1.amazonaws.com/10.jpg'
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
                    <h2>Gallery</h2>
                    <a href="#gallery"><BiChevronDownCircle className="openButton" onClick={() => this.setState({ display : !display})}/></a>
                </div>
            </div>
            { display
                ?
                <div id="gallery">
                     <a href="#gallery-section"><BiChevronUpCircle className="closeButton" onClick={() => this.setState({ display : !display})}/></a>
                    <h2 className="gallery-header">Photo Gallery</h2>
                        <div className="gallery-container">
                            <ImageGallery items={images} showPlayButton={false} />
                    </div>
                </div>
                :
                null
            }
            </div>
            );
    }
};

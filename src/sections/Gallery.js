import React from 'react';
import ImageGallery from 'react-image-gallery';

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
    
    render(){
        return(
            <div>
                <h2>Gallery</h2>
                <div id="gallery-dropdown" >
                    <div className="gallery-container">
                        <ImageGallery items={images} />
                    </div>
                </div>
            </div>
            );
    }
};

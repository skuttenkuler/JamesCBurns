import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'https://jimmyburns.s3-us-west-1.amazonaws.com/1.jpg',
        thumbnail:'https://jimmyburns.s3-us-west-1.amazonaws.com/1.jpg'
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

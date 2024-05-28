import ReactImageGallery from 'react-image-gallery';
import React from 'react';
import './App.css';

import comp1 from './assets/images/comp/comp1.jpg';
import comp2 from './assets/images/comp/comp2.jpg';
import comp3 from './assets/images/comp/comp3.jpg';
import comp4 from './assets/images/comp/comp4.jpeg';
import comp5 from './assets/images/comp/comp5.jpg';
import comp6 from './assets/images/comp/comp6.jpg';
import comp7 from './assets/images/comp/comp7.jpg';
import comp8 from './assets/images/comp/comp8.jpg';
import comp9 from './assets/images/comp/comp9.jpg';
import comp10 from './assets/images/comp/comp10.jpg';
import comp11 from './assets/images/comp/comp11.jpg';
import comp12 from './assets/images/comp/comp12.jpg';
import comp13 from './assets/images/comp/comp13.jpg';
import comp14 from './assets/images/comp/comp14.jpg';
import comp15 from './assets/images/comp/comp15.jpg';
import comp16 from './assets/images/comp/comp16.jpg';
import comp17 from './assets/images/comp/comp17.jpg';

const images = [
    { original: comp1, originalHeight: 250 },
    { original: comp2, originalHeight: 250 },
    { original: comp3, originalHeight: 250 },
    { original: comp4, originalHeight: 250 },
    { original: comp5, originalHeight: 250 },
    { original: comp6, originalHeight: 250 },
    { original: comp7, originalHeight: 250 },
    { original: comp8, originalHeight: 250 },
    { original: comp9, originalHeight: 250 },
    { original: comp10, originalHeight: 250 },
    { original: comp11, originalHeight: 250 },
    { original: comp12, originalHeight: 250 },
    { original: comp13, originalHeight: 250 },
    { original: comp14, originalHeight: 250 },
    { original: comp15, originalHeight: 250 },
    { original: comp16, originalHeight: 250 },
    { original: comp17, originalHeight: 250 },
  ];

  class MyGallery extends React.Component {
    render () {
        return <ReactImageGallery className='gallery' items={images} />;
    }
  }

export default MyGallery;
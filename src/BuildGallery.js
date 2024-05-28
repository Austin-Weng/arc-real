import ReactImageGallery from 'react-image-gallery';
import React from 'react';
import './App.css';

import build1 from './assets/images/build/build1.jpg';
import build2 from './assets/images/build/build2.jpg';
import build3 from './assets/images/build/build3.jpg';
import build4 from './assets/images/build/build4.jpg';
import build5 from './assets/images/build/build5.jpg';
import build6 from './assets/images/build/build6.jpg';
import build7 from './assets/images/build/build7.jpg';
import build8 from './assets/images/build/build8.jpg';
import build9 from './assets/images/build/build9.jpg';
import build10 from './assets/images/build/build10.jpg';
import build11 from './assets/images/build/build11.jpg';
import build12 from './assets/images/build/build12.jpg';


const images = [
    { original: build1, originalHeight: 250},
    { original: build2, originalHeight: 250},
    { original: build3, originalHeight: 250 },
    { original: build4, originalHeight: 250 },
    { original: build5, originalHeight: 250 },
    { original: build6, originalHeight: 250 },
    { original: build7, originalHeight: 250 },
    { original: build8, originalHeight: 250 },
    { original: build9, originalHeight: 250 },
    { original: build10, originalHeight: 250 },
    { original: build11, originalHeight: 250 },
    { original: build12, originalHeight: 250 },
  ];

  class MyGallery extends React.Component {
    render () {
        return <ReactImageGallery className='gallery' items={images} />;
    }
  }

  export default MyGallery;
import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  console.log('imagelist render');

  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return (
    <div className="image-list ui segment">
      {images.length > 0 ? images : <span> Sin resultados</span>}
    </div>
  );
};

export default ImageList;

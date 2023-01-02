import React from 'react';
import images from '../../assets/data/Images.json';
import ImageCard from './ImageCard';

const Images = () => {
  return (
    <div className='flex-1 flex w-full mx-auto my-6'>
        <div className=' columns-4 gap-x-2 pt-2'>
          {images.map((image) => {
            return <ImageCard image={image}/>
          })}
        </div>
    </div>
  )
}

export default Images;
import React from 'react';

const ImageCard = ({image}) => {
  return (
    <div>
        <figure className='mb-1 p-1 hover:p-0'>
          <img className='rounded-t-md' src={image.ImageLink} alt={image.Title} />
          <figcaption className='bg-slate-300 rounded-b-md p-1 w-full'>{image.Title}</figcaption>
        </figure>
    </div>
  )
}

export default ImageCard;
import React from 'react';

const ImageCard = ({image}) => {
  console.log('fig')
  return (
    <div>
      {console.log('fig')}
      {console.log(image)}
        <figure className='mb-2'>
          <img className=' rounded-t-md' src={image.ImageLink} alt={image.Title} />
          <figcaption className=' bg-slate-300 rounded-b-md p-1'>{image.Title}</figcaption>
        </figure>
    </div>
  )
}

export default ImageCard;
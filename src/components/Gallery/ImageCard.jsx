import React from 'react';
import {LazyLoadImage } from 'react-lazy-load-image-component';

const ImageCard = ({image}) => {
  return (
    <div className=' break-inside-avoid'>
        <figure className='mb-1 p-1 hover:p-0'>
          <img className='rounded-t-md' src={image.ImagePath} alt={image.Title} loading='lazy'/>
          {/* <LazyLoadImage className='rounded-t-md' src={image.ImagePath} alt={image.Title} loading='lazy'/> */}
          <figcaption className='shadow-lg rounded-b-md p-1 w-full font-Content'>
            <p className='px-1 text-xs md:text-sm drop-shadow-md'>
              <span className='font-bold'>{image.Title}</span>
              <span className='italic font-semibold'>{` by ${image.Creator} - `}</span>
              <a className='underline underline-offset-2 decoration-3 font-medium hover:decoration-accent-bar hover:text-lg hover:font-bold' href={image.Source} target='_blank'>source</a>
            </p>
          </figcaption>
        </figure>
    </div>
  )
}

export default ImageCard;
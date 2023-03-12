import React from 'react';
import {LazyLoadImage } from 'react-lazy-load-image-component';

const ImageCard = ({image}) => {
  return (
    <div className=' break-inside-avoid'>
        <figure className='mb-1 p-1 cursor-pointer'>
          <img className='rounded-t-md' src={image.ImagePath} alt={image.Title} loading='lazy'/>
          {/* <LazyLoadImage className='rounded-t-md' src={image.ImagePath} alt={image.Title} loading='lazy'/> */}
          <figcaption className='shadow-lg rounded-b-md mt-1 p-1 w-full font-Content'>
            <p className='px-1 text-xs md:text-sm drop-shadow-md'>
              <span className='font-bold hover:opacity-90'>{image.Title}</span>
              <span className='italic font-semibold hover:opacity-90'>{` by ${image.Creator} - `}</span>
              <a className='underline underline-offset-2 decoration-3 font-medium hover:decoration-accent-bar hover:opacity-90' href={image.Source} target='_blank'>source</a>
              {image.IsNsfw ? <span title='NSFW warning: Source link can redirect to a page with possibily explicit content' className=' bg-black text-red-500 ml-2 mt-1 font-extrabold text-xs p-1 rounded-md cursor-pointer'>NSFW</span> : ''}
            </p>
          </figcaption>
        </figure>
    </div>
  )
}

export default ImageCard;
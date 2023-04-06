import React from 'react';
import LNIllustrations from '../../data/assets/images/LNIllustrations.json';
import OfficialArt from '../../data/assets/images/OfficialArt.json';
import Fanart from '../../data/assets/images/Fanart.json';
import AIArt from '../../data/assets/images/AIArt.json';
import { IMAGETYPES } from '../../enums/ImageType';


const ImageCard = ({layout,layoutOptions, imageProps: { alt, src, style, title, ...restImageProps } }) => {

  const getImageDetails=(title)=>{
    const type = title.split('|')[0];
    const id = title.split('|')[1];

    if (type === IMAGETYPES.LNIllustrations) {
      return LNIllustrations.filter(x=>x.Id==id)[0];
    }
    else if (type === IMAGETYPES.OfficialArt) {
      
      return OfficialArt.filter(x=>x.Id==id)[0];
    }
    else if (type === IMAGETYPES.Fanart) {
      return Fanart.filter(x=>x.Id==id)[0];
    }
    else if (type === IMAGETYPES.AIArt) {
      return AIArt.filter(x=>x.Id==id)[0];
    }

  }

  const imageDetails=getImageDetails(title);
  return(
    <figure className='shadow-md mb-2 font-medium' >
      <img alt={alt} src={src} className=' rounded-md' style={{borderRadius: "6px 6px 4px 4px"}}  {...restImageProps} />
      <figcaption className=' rounded-b-md p-1 pb-2 mt-1'>
      <p className='px-1 text-xs md:text-sm drop-shadow-md'>
            <span className=''>{imageDetails.Title}</span>
            <span className='italic'>{` by ${imageDetails.Creator} - `}</span>
            <a className='underline underline-offset-2 decoration-3 hover:decoration-accent-bar hover:opacity-90' href={imageDetails.Source} target='_blank'>source</a>
            {imageDetails.IsNsfw ? <span title='NSFW warning: Source link can redirect to a page with possibily explicit content' className=' bg-red-500 text-slate-50 font-semibold ml-2 mt-1 text-xss md:text-xs p-1 rounded-md cursor-pointer'>NSFW</span> : ''}
          </p>
      </figcaption>
    </figure>
  )
};

export default ImageCard;
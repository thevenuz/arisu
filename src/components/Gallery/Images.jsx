import React from 'react';
import LNIllustrations from '../../data/assets/images/LNIllustrations.json';
import OfficialArt from '../../data/assets/images/OfficialArt.json';
import Fanart from '../../data/assets/images/Fanart.json';
import AIArt from '../../data/assets/images/AIArt.json';
import ImageCard from './ImageCard';
import { IMAGETYPES } from '../../enums/ImageType';
import { PhotoAlbum } from 'react-photo-album';

const Images = ({activeTab}) => {

  //Based on active tab get different images
  const getImages = () => {

    if (activeTab === IMAGETYPES.LNIllustrations) {
      return LNIllustrations;
    }
    else if (activeTab === IMAGETYPES.OfficialArt) {
      const latestOfficialArt = [...OfficialArt].reverse();
      return latestOfficialArt;
    }
    else if (activeTab === IMAGETYPES.Fanart) {
      const latestFanArt = [...Fanart].reverse();
      return latestFanArt;
    }
    else if (activeTab === IMAGETYPES.AIArt) {
      const latestAIArt = [...AIArt].reverse();
      return latestAIArt;
    }

    return LNIllustrations;
  }

  const buildImages=()=>{
    const images=[];
    getImages().map((image)=>{
      images.push({
        src: image.ImagePath,
        width: image.Width,
        height: image.Height,
        key: image.Id,
        title: `${activeTab}|${image.Id}`,
        images:{
          src: image.ImagePath,
          width: image.Width,
          height: image.Height,
        }
      })
    });
    return images;
  }
  

return (
  
<PhotoAlbum layout='masonry' padding={0} spacing={8}  photos={buildImages()} renderPhoto={ImageCard} columns={(containerWidth) => {
        if (containerWidth < 200) return 1;
        if (containerWidth < 400) return 2;
        if (containerWidth < 800) return 3;
        return 4;
    }}/>
);
}

export default Images;
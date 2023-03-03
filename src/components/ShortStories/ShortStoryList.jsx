import React from 'react';
import ShortStories from '../../data/assets/shortstories/ShortStoriesList.json';
import ShortStoryListItem from './ShortStoryListItem';

const ShortStoryList = () => {
  return (
    <div className='flex-1 py-6 px-6'>
      {ShortStories.map((story) => {
        return <ShortStoryListItem story={story}/>
      })}
    </div>
  )
}

export default ShortStoryList;

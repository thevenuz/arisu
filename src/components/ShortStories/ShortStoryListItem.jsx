import React from 'react';
import ShortStoryContent from './ShortStoryContent';
import { Route, useNavigate } from "react-router-dom";

const ShortStoryListItem = ({story}) => {

    const navigate = useNavigate();

    const loadSS = (event, source) => {
        event.preventDefault();
        navigate('./data/shortstories/vol6_behind_the_scenes.md')
    }

  return (
    <div className='p-2'>
      <p className='font-semibold font-Outfit list-disc'>{story.Volume}</p>
      <ul className='list-disc'>
        {story.Stories.map((storyItem) => {
           return <li className='ml-10'><a href='#' onClick={event => loadSS(event, storyItem.Source)} className='underline'>{storyItem.Title}</a></li>
        })}
      </ul>
    </div>
  )
}

export default ShortStoryListItem;

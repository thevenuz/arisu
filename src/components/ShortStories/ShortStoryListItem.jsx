import React from 'react';
import ShortStoryContent from './ShortStoryContent';
import { Route, useNavigate } from "react-router-dom";

const ShortStoryListItem = ({story}) => {

    const navigate = useNavigate();

    const loadSS = (event, story) => {
        event.preventDefault();
        navigate(`/ss/${story.Title}`, {state: story});
    }

  return (
    <div className='p-2'>
      <p className='font-semibold font-Heading list-disc'>{story.Volume}</p>
      <ul className='list-disc'>
        {story.Stories.map((storyItem) => {
           return <li className='ml-10'><a href='#' onClick={event => loadSS(event, storyItem)} className='underline font-SS-content'>{storyItem.Title}</a></li>
        })}
      </ul>
    </div>
  )
}

export default ShortStoryListItem;

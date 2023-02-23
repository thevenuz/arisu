import React, {useEffect} from 'react';
import fanfics from '../../assets/data/fanfics/fanfics.json';
import ShortStories from '../../assets/data/shortstories/ShortStoriesList.json';
import { Link} from "react-router-dom";
import { Route, useNavigate } from "react-router-dom";

const RecentsSection = () => {

  const navigate = useNavigate();

  const loadSS = (event, story) => {
    event.preventDefault();
    navigate(`/ss/${story.Title}`, {state: story});
}

  const getRecentFanfic=() => {
    const recentFanfic = fanfics.slice(-1);
    const recentChapter = recentFanfic[0].Chapters.slice(-1);

    return {
      'Author' : recentFanfic[0].Author,
      'Title' : recentChapter[0].Title,
      'Source' : recentChapter[0].Source,
      'From' : recentFanfic[0].From,
    }
  }

  const getRecentShortStory = () => {
    const recentSS = ShortStories.slice(-1);    
    const recentStoryDetails = recentSS[0].Stories.slice(-1);

    return {
      'Volume': recentSS[0].Volume,
      'Story' : recentStoryDetails[0]
    };

  }

  return (
    // Recent Additions section
    <div className='flex-col w-4/5 mx-auto my-6 shadow-md rounded-md p-4 font-Heading'>
      <div className='py-2'>
        <p className='  font-bold text-lg'>RECENT ADDITIONS</p>
      </div>
      <div className='flex space-x-4'>
        <div className='py-2'>
          <p className='  font-semibold text-lg pl-2'>Recently added Fanfic</p>
          <div className='mt-2 shadow-md p-2 rounded-md'>
            <p className=' my-1 text-lg font-semibold'>{getRecentFanfic().Title}</p>
            <p className=' italic my-1'>by <span className=' font-semibold'>{getRecentFanfic().Author}</span> on <span className=' font-semibold'>{getRecentFanfic().From}</span></p>
          </div>
          
          <div className='w-full bg-accent-bar rounded-b-md'>
            <a className='p-1 block font-semibold text-main-text w-full text-center' href={getRecentFanfic().Source} target='_blank' >Read</a>
          </div>
        </div>
        <div className='p-2'>
          <p className='  font-semibold text-lg pl-2'>Recently added Short story</p>
          <div className='mt-2 shadow-md p-2 rounded-md'>
            <p className=' my-1 text-lg font-semibold'>{getRecentShortStory().Story.Title}</p>
            <p className=' italic my-1'>from <span className='font-semibold'>{getRecentShortStory().Volume}</span></p>
          </div>
          
          <div className='w-full bg-accent-bar flex rounded-b-md cursor-pointer'>
            <a href='#' className='p-1 block text-center w-full font-semibold text-main-text' onClick={event => loadSS(event, getRecentShortStory().Story)}>Read</a>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default RecentsSection;
import React, { memo, useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import About from '../../data/content/about.md';
import AboutSite from '../../data/content/aboutSite.md';

const AboutContent = memo(() => {

  // State for markdown content
  const [ content, setContent] = useState({md: ""});
  const [ aboutSite, setAboutSite] = useState({md: ""});
  const [showAboutChar, setShowAboutChar] = useState(()=>true);
  const [showAboutSite, setShowAboutSite] = useState(()=>false);

  useEffect(() => {
    fetch(About)
        .then((res) => res.text())
        .then((md) => {
            setContent({ md })
        });
        fetch(AboutSite)
        .then((result) => result.text())
        .then((md) => {
            setAboutSite({ md  })
        });
  }, []);

  return (
    <div className='flex-1 font-Heading w-5/6 p-4 mx-auto my-6 min-h-screen shadow-md rounded-md space-y-2'>
      <div className='p-2'>
          <div className='text-2xl flex underline underline-offset-8 my-4 font-bold decoration-main-bg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 mt-1 mr-2 cursor-pointer ${showAboutChar ? 'rotate-90' : ''}`} onClick={()=>setShowAboutChar((prev) => !prev)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>ABOUT THE CHARACTER
          </div>
        <p className={`text-lg font-medium px-2 pl-8 ${showAboutChar ? '' : 'hidden'}`}><Markdown children={content.md}/></p>
      </div>
      
        <div className='p-2'>
        <div className='text-2xl flex underline underline-offset-8 my-4 decoration-main-bg font-bold'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 mt-1 mr-2 cursor-pointer ${showAboutSite ? 'rotate-90' : ''}`} onClick={()=>setShowAboutSite((prev) => !prev)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>ABOUT THE SITE
          </div>
          <p className={` text-lg font-medium px-2 pl-8 ${showAboutSite ? '' : 'hidden'}`}><Markdown children={aboutSite.md}/></p>
        </div>
        
        <div className='px-2 py-4'>
          <p className='text-2xl font-bold underline underline-offset-8'>JOIN US</p>
          <div className='flex space-x-4'>
          <a href='https://www.reddit.com/r/ClassroomOfTheElite' target='_blank' title='Join Classroom of the Elite subreddit'>
            <img className='mt-10 w-16 h-16' src='/images/Assets/reddit.png' alt='reddit-icon'/>
          </a>
          <a href='https://discord.com/invite/R38FNs6' target='_blank' title='Join You-Zitsu discord server'>
            <img className='mt-10 w-16 h-16' src='/images/Assets/discord.png' alt='discord-icon'/>
          </a>
          </div>
          
        </div>
      
    </div>
  )
});

export default AboutContent;

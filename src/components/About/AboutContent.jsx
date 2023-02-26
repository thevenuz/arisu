import React, { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import About from '../../data/content/about.md';
import AboutSite from '../../data/content/aboutSite.md'

const AboutContent = () => {

  // State for markdown content
  const [ content, setContent] = useState({md: ""});
  const [ aboutSite, setAboutSite] = useState({md: ""});

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
    <div className='flex-1 font-SS-content w-5/6 p-2 mx-auto my-6 min-h-screen'>
      <div className='py-2'>
        <p className='text-2xl underline underline-offset-8 my-4 font-bold'>ABOUT THE CHARACTER</p>
        <Markdown children={content.md}/>
      </div>
      
        <div className='py-2'>
          <p className='text-2xl underline underline-offset-8 my-4 font-bold'>ABOUT THE SITE</p>
          <Markdown children={aboutSite.md}/>
        </div>
      
    </div>
  )
}

export default AboutContent;

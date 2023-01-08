import React, { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import About from '../../data/content/about.md';

const AboutContent = () => {

  // State for markdown content
  const [ content, setContent] = useState({md: ""});

  useEffect(() => {
    fetch(About)
        .then((res) => res.text())
        .then((md) => {
            setContent({ md })
        })
  }, []);

  return (
    <div className='font-SS-content w-5/6 p-2 mx-auto my-6'>
      <Markdown children={content.md}/>
    </div>
  )
}

export default AboutContent;

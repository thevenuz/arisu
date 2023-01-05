import React, {useState, useEffect} from 'react';
import Markdown from 'markdown-to-jsx';
import vol6 from '../../data/shortstories/vol6_behind_the_scenes.md'

const ShortStoryContent = () => {

    const [ content, setContent] = useState({md: ""});

    useEffect(()=> {
        fetch(vol6)
            .then((res) => res.text())
            .then((md) => {
                setContent({ md })
            })
    }, [])

  return (
    <div>
        <div className='items-center justify-center text-center'>
            <p>Test</p>
        </div>
      <div className="post font-medium">
        <Markdown children={content.md}/>
      </div>
    </div>
  )
}

export default ShortStoryContent;

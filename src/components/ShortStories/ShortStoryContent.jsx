import React, {useState, useEffect} from 'react';
import { useLocation, useParams } from "react-router-dom";
import Markdown from 'markdown-to-jsx';
import Footer from '../Footer';
import { PAGES } from '../../enums/Pages';

const ShortStoryContent = ({setActivePage}) => {

  setActivePage(PAGES.HOME);

  // State for markdown content
  const [ content, setContent] = useState({md: ""});

  // Name and state of the ss from navigation
  const { name } = useParams();
  const {state } = useLocation();
  
  // Load all markdown files
  const ss = {}
  const context = require.context('../../data/shortstories/', false,/\.(md)$/);

  context.keys().forEach((file)=>{
    const filename = file.replace('./','').replace('.md','');
    ss[filename] = context(file);
  });

  useEffect(()=> {
      fetch(ss[state.FileName])
          .then((res) => res.text())
          .then((md) => {
            setContent({ md })
          })
  }, [])

  return (
    <div className='flex container  w-full overflow-y-hidden'>
      <div className='w-full mx-auto overflow-y-auto no-scrollbar'>
      <div className='w-4/5 mx-auto p-6 overflow-y-auto no-scrollbar'>
        <div className='w-5/6 mx-auto shadow-md'>
          {/* SS info  */}
          <div className='items-center justify-center text-center mt-4'>
                <p className='font-Heading font-bold text-3xl py-1'>{state.Title}</p>
                <p className='font-SS-content font-bold text-lg'><a className='underline py-1' href={state.Source} target='_blank'>Source</a>{state.Info ? ` - ${state.Info}` : ''}</p>
            </div>
          <div className="post text-xl font-medium mt-4 py-6 px-8 font-SS-content">
            <Markdown children={content.md}/>
          </div>
        </div>
        <div>
        <Footer/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ShortStoryContent;

import React, {useState, useEffect} from 'react';
import { useLocation} from "react-router-dom";
import Markdown from 'markdown-to-jsx';
import Footer from '../Shared/Footer';
import { PAGES } from '../../enums/Pages';

const ShortStoryContent = ({setActivePage, isMobileNavbarOpen = false}) => {

  setActivePage(PAGES.SHORTSTORIES);

  // State for markdown content
  const [ content, setContent] = useState({md: ""});

  // State of the ss from navigation
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
    <div className={`flex  w-full overflow-y-hidden ${isMobileNavbarOpen ? 'hidden' : ''}`}>
      <div className='w-full mx-auto overflow-y-auto no-scrollbar'>
      <div className='w-4/5 mx-auto p-6 overflow-y-auto no-scrollbar'>
        <div className='w-full md:w-5/6 mx-auto shadow-md'>
          {/* SS info  */}
          <div className='items-center justify-center text-center mt-4'>
                <p className='font-Heading font-bold text-xl md:text-3xl py-1'>{state.Title}</p>
                <p className='font-Content font-bold text-sm md:text-lg'><a className='underline py-1' href={state.Source} target='_blank'>Source</a>{state.Info ? ` - ${state.Info}` : ''}</p>
            </div>
          <div className="post text-xl font-medium mt-4 py-6 px-3 md:px-8 font-Content">
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

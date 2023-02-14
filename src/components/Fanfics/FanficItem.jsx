import React from 'react';

const FanficItem = ({fic}) => {

    const authorData = (ficData) => {
        if (ficData.AuthorLink) {
            return <a className='underline underline-offset-3 italic' href={ficData.AuthorLink} target='_blank'>{ficData.Author}</a>
        }
        return <span className='italic'>{ficData.Author}</span>
    }

  return (
    <div className='py-2'>
        <p className='font-medium font-Heading'>{fic.Story}</p>
        <ul>
            {
                fic.Chapters.map((chapter) => {
                    return <li className='list-disc ml-8 my-2'>
                        <p><a className='underline underline-offset-3' href={chapter.Source} target='_blank'>{chapter.Title}</a> - by {authorData(fic)} on {fic.From}</p>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default FanficItem

import React, { memo } from 'react';

const Welcome = memo(() => {
  return (
    // This is for welcome text
    <div className='flex w-full items-center align-middle justify-center'>
        <div className='flex justify-center my-10'>
            <p className='font-Heading font-extrabold text-xl md:text-5xl w-7/12 tracking-wide text-center'>
                "WELCOME TO ARISU-CAMP, A SITE FOR THE QUEEN ARISU SAKAYANAGI"
            </p>
        </div>
    </div>
  )
});

export default Welcome;
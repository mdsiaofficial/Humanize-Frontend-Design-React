import React from 'react'
import { ar1, logo, logo2, arrowright, bypassfeat, bypasssoln, check1, check2, checkcircleicon, checkforai, content, ellipse, flag, framein, frameout, gram1, howitworks, msg, path, plus, rectangle, score, spark1, stars5, upload, vector, web, write1 } from '../Global/Imports.jsx';
const BypassFeat = () => {
  return (
    <div className='flex flex-col w-[33%] max-md:ml-0 lg:w-[100%]'>
      <div className="flex flex-col justify-center items-center">
      <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
        <div className="mt-32 text-4xl font-medium tracking-tight leading-10 text-center text-slate-50 w-[650px] max-md:mt-10 max-md:max-w-full">
          Experience the Magic of Authentic Content with Our Bypass Feature
        </div>
        <div className="mt-10 w-full max-w-[1116px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={bypassfeat}
                className="grow mt-7 w-full aspect-[1.05] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="text-base font-medium leading-6 text-slate-300 max-md:mt-10 max-md:max-w-full">
                Are you tired of feeling like the limitations of AI algorithms
                are stifling your content? Do you long for the days when writing
                was an art, not a science? Well, now you can experience the
                magic of authentic content with our powerful bypass feature.
                <br />
                <br />
                Our feature is the key to unlocking the true potential of your
                content. By bypassing AI detection, you can create authentic,
                engaging and original content that truly resonates with your
                audience. No more feeling like you're AI writing for robots -
                with our bypass feature, you can write from the heart and create
                content that's truly yours.
                <br />
                <br />
                The magic of authentic content lies in its ability to connect
                with people on a deeper level. When you write authentically,
                you're not just communicating information - you're telling a
                story, sharing a piece of yourself, and inviting your audience
                to join you on a journey.
                <br />
                <br />
                So, if you're ready to experience the magic of authentic content
                and take your writing to the next level, look no further than
                our powerful bypass feature. It's the key to unlocking your
                creativity, connecting with your audience, and achieving real
                results.
              </div>
            </div>
          </div>
        </div>
        <button className="flex gap-1 justify-center px-6 py-4 mt-12 lg:ml-40 text-base font-semibold leading-6 bg-violet-600 rounded border border-violet-300 border-solid text-slate-50 max-md:px-5 max-md:mt-10">
          <div>Start Your Humanize Journey</div>
          <img
            loading="lazy"
            src={arrowright}
            className="shrink-0 my-auto aspect-square w-[18px]"
          />
        </button>
      </div>
    </div>
  )
}

export default BypassFeat

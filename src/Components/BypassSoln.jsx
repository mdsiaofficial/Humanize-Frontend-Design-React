import React from 'react'
import { ar1, logo, logo2, arrowright, bypassfeat, bypasssoln, check1, check2, checkcircleicon, checkforai, content, ellipse, flag, framein, frameout, gram1, howitworks, msg, path, plus, rectangle, score, spark1, stars5, upload, vector, web, write1 } from '../Global/Imports.jsx';
const BypassSoln = () => {
  return (
    <div className='flex flex-col w-[33%] lg:w-full max-md:ml-0 max-md:w-full'>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-32 text-4xl font-medium tracking-tight leading-10 text-center text-slate-50 w-[650px] max-md:mt-10 max-md:max-w-full">
          Get Ahead of the Competition with Our Innovative Bypass Solution
        </div>
        <div className="mt-10 w-full max-w-[1086px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="text-base font-medium leading-6 underline text-slate-300 max-md:mt-10 max-md:max-w-full">
                In today's hyper-competitive digital landscape, standing out
                from the crowd can be tough. With so many businesses vying for
                attention, having a unique edge is more important than ever.
                That's where our innovative bypass solution comes in.
                <br />
                <br />
                With our powerful Bypasser tool, you can get ahead of the
                competition by bypassing AI detection and writing content that
                truly connects with your audience.
                <br />
                Gone are the days of struggling to keep up with the latest SEO
                algorithms or worrying about your content being overlooked by
                search engines. With our Undetectable AI tool, you can create
                content that's both engaging and effective - content that sets
                you apart from the competition and drives real results.
                <br />
                <br />
                Imagine being able to write with the confidence that your words
                will be seen and appreciated by real people - not just
                algorithms. That's the power of our innovative bypass solution.
                <br />
                <br />
                So, if you're ready to get ahead of the competition and take
                your content to the next level, look no further than our
                powerful <span className="underline">Undetectable AI</span>
                tool. With its cutting-edge technology and intuitive interface,
                you'll be able to create content that truly resonates with your
                audience and drives real results. Don't settle for being just
                another face in the crowd - take the first step towards success
                with our innovative bypass solution.
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={bypasssoln}
                className="mt-28 w-full aspect-[1.01] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <button className="flex gap-1 justify-center px-6 py-4 mt-14 ml-28 text-base font-semibold leading-6 bg-violet-600 rounded border border-violet-300 border-solid text-slate-50 max-md:px-5 max-md:mt-10 max-md:ml-2.5">
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

export default BypassSoln

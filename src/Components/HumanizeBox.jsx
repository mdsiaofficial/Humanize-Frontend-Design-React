import React from 'react'
import { ar1, logo, logo2, arrowright, bypassfeat, bypasssoln, check1, check2, checkcircleicon, checkforai, content, ellipse, flag, framein, frameout, gram1, howitworks, msg, path, plus, rectangle, score, spark1, stars5, upload, vector, web, write1 } from '../Global/Imports.jsx';
const HumanizeBox = () => {
  return (
    <div>
      {/* desktop */}
      <div className="hidden lg:flex flex-col bg-boxbg border border-slate-600 lg:w-[1570px] lg:h-[717px] lg:my-10">
        {/* full box bar */}
        <div className="flex gap-5 px-7 py-3.5 w-full text-base font-medium leading-6 rounded- border-2 border-solid bg-slate-900 border-slate-600 text-slate-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">

          {/* box bar left*/}
          <div className="flex flex-auto gap-2 my-auto max-md:flex-wrap">
            <div className="flex gap-1 px-3.5 py-1.5 whitespace-nowrap border border-solid bg-slate-700 border-slate-600 rounded-[150px]">
              <img
                loading="lazy"
                src={gram1}
                className="shrink-0 my-auto w-4 aspect-square"
              />
              <div>Standard</div>
            </div>
            <div className="flex gap-1 px-3.5 py-1.5 whitespace-nowrap bg-slate-900 rounded-[150px]">
              <img
                loading="lazy"
                src={framein}
                className="shrink-0 self-start w-6 aspect-square"
              />
              <div>Shorten</div>
            </div>
            <div className="flex gap-1 px-3.5 py-1.5 whitespace-nowrap bg-slate-900 rounded-[50px]">
              <img
                loading="lazy"
                src={frameout}
                className="shrink-0 self-start w-6 aspect-square"
              />
              <div>Expand</div>
            </div>
            <div className="flex gap-1 px-3.5 py-1.5 whitespace-nowrap bg-slate-900 rounded-[50px]">
              <img
                loading="lazy"
                src={ar1}
                className="shrink-0 my-auto aspect-square w-[18px]"
              />
              <div>Simplify</div>
            </div>
            <div className="flex gap-1 px-3.5 py-1.5 bg-slate-900 rounded-[50px]">
              <img
                loading="lazy"
                src={write1}
                className="shrink-0 self-start aspect-square w-[21px]"
              />
              <div>Improve Writing</div>
            </div>
          </div>
          {/* box bar left end*/}

          {/* box bar right*/}
          <div className="flex flex-auto gap-3 max-md:flex-wrap">
            <div className="flex gap-3 px-4 py-2.5 rounded-md border-2 border-solid bg-slate-900 border-slate-500">
              <div className="bg-transparent">
                <select className="bg-transparent" name="language" id="language">
                  <option className="bg-transparent" value="enguk">English (UK)</option>
                  <option className="bg-transparent" value="engus">English (US)</option>
                  <option className="bg-transparent" value="ban">Bangla</option>
                  <option className="bg-transparent" value="rus">Russian</option>
                </select>
              </div>

            </div>
            <div className="flex gap-2 justify-center px-6 py-2.5 rounded-md border-2 border-solid bg-slate-900 border-slate-500 max-md:px-5">
              <img
                loading="lazy"
                src={flag}
                className="shrink-0 my-auto aspect-[0.93] w-[13px]"
              />
              <div>Set Goals</div>
            </div>
            <div className="flex gap-2 justify-center px-6 py-2.5 rounded-md border-2 border-solid bg-slate-900 border-slate-500 max-md:px-5">
              <img
                loading="lazy"
                src={vector}
                className="shrink-0 my-auto aspect-[0.93] fill-purple-400 w-[15px]"
              />
              <div>Super Charge</div>
            </div>
          </div>
        </div>
        {/* box bar right end */}

        {/* text box here */}
        <div className="flex flex-row">
          <div className="">
            <textarea id="inputbox" name="inputbox" className='h-[637px] w-[859px] font-bold pl-[7rem] pt-[7rem] bg-transparent border border-slate-600 text-white text-xl'>
              Original:
              Paste text here...
            </textarea>
            <div className="submitbuttons relative text-white flex gap-7 -mt-[6rem] ml-[30rem]">
              <button className="flex gap-1 justify-center px-6 py-3 rounded-md border-2 border-solid bg-slate-800 border-slate-600 max-md:px-5">
                <img
                  loading="lazy"
                  src={check2}
                  className="shrink-0 my-auto w-5 aspect-square"
                />
                <div>Check for AI</div>
              </button>
              <button className="flex gap-1 justify-center px-6 py-3 whitespace-nowrap bg-violet-600 rounded border border-violet-300 border-solid max-md:px-5">
                <img
                  loading="lazy"
                  src={spark1}
                  className="shrink-0 w-6 aspect-[0.96]"
                />
                <div>Humanize</div>
              </button>
            </div>
          </div>

          <textarea id="outputbox" name="outputbox" className='h-[637px] w-[859px] font-bold pl-[7rem] pt-[7rem] bg-transparent border border-slate-600 text-white text-xl'>
            Humanized:
            Your humanized text here...
          </textarea>
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden flex flex-col m-5">
        {/* upper buttons */}
        <div className="flex text-white gap-4">
          <div className="flex gap-3 px-4 py-2.5 rounded-md border-2 border-solid bg-slate-900 border-slate-500">
            <div className="bg-transparent">
              <select className="bg-transparent" name="language" id="language">
                <option className="bg-transparent" value="enguk">English (UK)</option>
                <option className="bg-transparent" value="engus">English (US)</option>
                <option className="bg-transparent" value="ban">Bangla</option>
                <option className="bg-transparent" value="rus">Russian</option>
              </select>
            </div>

          </div>
          <div className="flex gap-2 justify-center px-6 py-2.5 rounded-md border-2 border-solid bg-slate-900 border-slate-500 max-md:px-5">
            <img
              loading="lazy"
              src={flag}
              className="shrink-0 my-auto aspect-[0.93] w-[13px]"
            />
            <div>Set Goals</div>
          </div>
        </div>

        {/* box */}
        <div className="">
          {/* box bar */}
          <section className='bg-bgbox text-white border rounded-sm mt-7 flex justify-center items-center'>
            <div className="flex justify-center items-center gap-3 w-[65%] m-2 bg-slate-800 rounded-[150px]">
              <div className="justify-center px-5 py-2 border border-solid bg-slate-700 border-slate-600 rounded-[150px]">
                Original
              </div>
              <div className="flex-auto my-auto">Humanized</div>
            </div>
          </section>
          <textarea id="inputbox" name="inputbox" className="h-[477px] w-[324px] bg-slate-900 border text-white">Paste text here...</textarea>

          {/* score and word count */}
          <div className="text-white flex gap-5 -mt-[6rem] ml-[2rem] ">
            <section className='flex flex-col gap-2 justify-center items-center'>
              <span className="flex gap-1 w-[70px] justify-center px-6 py-2 rounded-full border border-solid bg-slate-600 max-md:px-5">
                <div className="">120</div>
              </span>
              <div className="">Word Count</div>
            </section>
            <section className='flex flex-col gap-2 justify-center items-center'>
              <span className="flex gap-1 w-[70px] justify-center px-6 py-2 rounded-full border border-solid bg-slate-600  max-md:px-5">
                <div className="">55</div>
              </span>
              <div className="">Human Score</div>
            </section>
          </div>

          {/* under box button */}
          <div className="flex gap-2 my-4 items-center justify-center">
            <button className="flex gap-1 justify-center px-6 py-3 rounded-md border-2 border-solid bg-slate-800 border-slate-600 max-md:px-5">
              <img
                loading="lazy"
                src={check2}
                className="shrink-0 my-auto w-5 aspect-square"
              />
              <div>Check for AI</div>
            </button>
            <button className="flex gap-1 justify-center px-6 py-3 whitespace-nowrap bg-violet-600 rounded border border-violet-300 border-solid max-md:px-5">
              <img
                loading="lazy"
                src={spark1}
                className="shrink-0 w-6 aspect-[0.96]"
              />
              <div>Humanize</div>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HumanizeBox

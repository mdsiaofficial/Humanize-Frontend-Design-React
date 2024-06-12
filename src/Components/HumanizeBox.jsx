import React from 'react'
import { ar1, logo, logo2, arrowright, bypassfeat, bypasssoln, check1, check2, checkcircleicon, checkforai, content, ellipse, flag, framein, frameout, gram1, howitworks, msg, path, plus, rectangle, score, spark1, stars5, upload, vector, web, write1 } from '../Global/Imports.jsx';
const HumanizeBox = () => {
  return (
    <div>

      <div className="flex flex-col bg-boxbg border border-slate-600 w-[1570px] h-[717px] my-10">

        {/* full box bar */}
        <div className="flex gap-5 px-7 py-3.5 w-full text-base font-medium leading-6 rounded-lg border-2 border-solid bg-slate-900 border-slate-600 text-slate-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">

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
            <div className="flex gap-1 px-3.5 py-1.5 whitespace-nowrap bg-slate-900 rounded-[50px]">
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
              <div className="flex-1">English (UK)</div>
              <img
                loading="lazy"
                src={gram1}
                className="shrink-0 my-auto w-4 aspect-square"
              />
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
        <div className="self-center w-full max-w-[958px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-20 text-base max-md:mt-10">
                <div className="font-semibold leading-[150%] text-slate-50">
                  Original:
                </div>
                <div className="mt-5 font-medium leading-[156%] text-slate-200">
                  Paste text here...
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex gap-3 text-base font-semibold leading-6 text-white mt-[569px] max-md:mt-10">
                      <div className="flex gap-1 justify-center px-6 py-3 rounded-md border-2 border-solid bg-slate-800 border-slate-600 max-md:px-5">
                        <img
                          loading="lazy"
                          src={check2}
                          className="shrink-0 my-auto w-5 aspect-square"
                        />
                        <div>Check for AI</div>
                      </div>
                      <div className="flex gap-1 justify-center px-6 py-3 whitespace-nowrap bg-violet-600 rounded border border-violet-300 border-solid max-md:px-5">
                        <img
                          loading="lazy"
                          src={spark1}
                          className="shrink-0 w-6 aspect-[0.96]"
                        />
                        <div>Humanize</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex grow gap-5 text-base max-md:mt-8">
                      <div className="shrink-0 w-0.5 border-2 border-solid bg-slate-600 border-slate-600 h-[646px]" />
                      <div className="flex flex-col grow shrink-0 self-start mt-20 basis-0 w-fit max-md:mt-10">
                        <div className="font-semibold leading-[150%] text-slate-50">
                          Humanized:
                        </div>
                        <div className="mt-6 font-medium leading-[156%] text-slate-200">
                          Your humanized text will appear here...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HumanizeBox

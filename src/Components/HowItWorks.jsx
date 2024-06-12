import React from 'react'
import { ar1, logo, logo2, arrowright, bypassfeat, bypasssoln, check1, check2, checkcircleicon, checkforai, content, ellipse, flag, framein, frameout, gram1, howitworks, msg, path, plus, rectangle, score, spark1, stars5, upload, vector, web, write1 } from '../Global/Imports.jsx';

const HowItWorks = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-32 text-4xl font-medium tracking-tight text-center leading-[55.08px] text-slate-50 max-md:mt-10">
          How it works
        </div>
        <div className="flex mt-6 w-full max-w-[1119px] max-md:max-w-full">
          <div className="flex justify-center items-center gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto font-medium max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-wrap">
                  <div className="shrink-0 self-start bg-violet-400 rounded-full h-[13px] w-[13px]" />
                  <div className="flex flex-col grow shrink-0 px-5 basis-0 w-fit">
                    <div className="text-2xl tracking-tight text-white leading-[54.96px]">
                      Step 1
                    </div>
                    <div className="mt-5 text-base leading-6 text-slate-300">
                      Start by uploading your AI-generated text or type directly
                      into Humanize.
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 mt-14 max-md:flex-wrap max-md:mt-10">
                  <div className="shrink-0 self-start bg-violet-400 rounded-full h-[13px] w-[13px]" />
                  <div className="flex flex-col grow shrink-0 px-5 basis-0 w-fit">
                    <div className="text-2xl tracking-tight text-white leading-[54.96px]">
                      Step 2
                    </div>
                    <div className="mt-5 text-base leading-6 text-slate-300">
                      Customize using settings for style, tone, and purpose,
                      tailoring the output to your exact needs.
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 mt-14 max-md:flex-wrap max-md:mt-10">
                  <div className="shrink-0 self-start bg-violet-400 rounded-full h-[13px] w-[13px]" />
                  <div className="flex flex-col grow shrink-0 px-5 basis-0 w-fit">
                    <div className="text-2xl tracking-tight text-white leading-[54.96px]">
                      Step 3
                    </div>
                    <div className="mt-5 text-base leading-6 text-slate-300">
                      Click 'Humanize' and watch as your content is transformed
                      into engaging, human-like prose.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={howitworks}
                className="grow w-full aspect-[1.1] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks

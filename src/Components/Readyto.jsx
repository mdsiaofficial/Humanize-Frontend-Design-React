import React from 'react'
import { arrowright, logo2 } from '../Global/Imports'

const Readyto = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center px-16 pt-12 pb-20 mt-20 w-full font-medium rounded-lg border-2 border-solid border-slate-500 max-w-[1319px] text-slate-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-center mb-3 max-w-full w-[689px]">
            <img
              loading="lazy"
              src={logo2}
              className="max-w-full aspect-[1.22] w-[171px]"
            />
            <div className="mt-7 text-4xl tracking-tight text-center leading-[55.08px] max-md:max-w-full">
              Ready to elevate your AI content?
            </div>
            <div className="self-stretch mt-6 text-xl tracking-normal leading-7 text-center text-slate-200 max-md:max-w-full">
              Join thousands of content creators who trust Humanize to bring a
              human touch to their AI-generated content.
            </div>
            <div className="flex gap-1 justify-center px-6 py-4 mt-10 text-base font-semibold leading-6 bg-violet-600 rounded border border-violet-300 border-solid max-md:px-5">
              <button className='flex gap-3'>
                <div>Start Your Humanize Journey</div>
                <img
                  loading="lazy"
                  src={arrowright}
                  className="shrink-0 my-auto aspect-square w-[18px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Readyto

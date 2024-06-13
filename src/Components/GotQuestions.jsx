import React from 'react'
import { plus } from '../Global/Imports'

const GotQuestions = () => {
  return (
    <div>
      <div className="mx-auto">
        <div className="mt-32 text-4xl font-medium tracking-tight text-center leading-[55.08px] text-slate-50 max-md:mt-10 max-md:max-w-full">
          Got questions? we've got answers.
        </div>

        <div className="flex justify-center flex-col items-center">
          <div className="shrink-0 mt-9 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
          <div className="flex gap-5 px-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
            <div className="flex-auto max-md:max-w-full">
              How does Humanize ensure the content remains undetectable by AI
              detectors?
            </div>
            <button> 
              <img
                loading="lazy"
                src={plus}
                className="shrink-0 w-8 aspect-square"
              />
            </button>
          </div>
          <div className="hidden mt-7 text-base font-medium leading-6 text-slate-300 max-md:max-w-full">
            Humanize uses state-of-the-art algorithms designed to subtly modify
            AI-generated text, making it mimic natural human writing patterns. These
            adjustments include varying sentence structure, using idiomatic
            expressions, and incorporating stylistic nuances, which effectively help
            the content bypass AI detection.
          </div>
          <div className="shrink-0 mt-7 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
          <div className="flex gap-5 px-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
            <div className="flex-auto max-md:max-w-full">
              Can Humanize work with content in languages other than English?
            </div>
            <button>
              <img
                loading="lazy"
                src={plus}
                className="shrink-0 w-8 aspect-square"
              />
            </button>
          </div>
          <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
          <div className="flex gap-5 px-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
            <div className="flex-auto max-md:max-w-full">
              {" "}
              Is Humanize suitable for academic or business writing?
            </div>
            <button>
              <img
                loading="lazy"
                src={plus}
                className="shrink-0 w-8 aspect-square"
              />
            </button>
          </div>
          <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
          <div className="flex gap-5 px-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
            <div className="flex-auto max-md:max-w-full">
              What kind of customization options does Humanize offer?
            </div>
            <button>
              <img
                loading="lazy"
                src={plus}
                className="shrink-0 w-8 aspect-square"
              />
            </button>
          </div>
          <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
          <div className="flex gap-5 px-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
            <div className="flex-auto max-md:max-w-full">
              {" "}
              Is there a trial period for Humanize, and what does it include?
            </div>
            <button>
              <img
                loading="lazy"
                src={plus}
                className="shrink-0 w-8 aspect-square"
              />
            </button>
          </div>
          <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />

        </div>
      </div>
    </div>
  )
}

export default GotQuestions

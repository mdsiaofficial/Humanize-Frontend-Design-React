import React from 'react'
import { stars5 } from '../Global/Imports'

const CustomerFeedback = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="px-5 mt-12 w-full max-w-[1319px] max-md:mt-10 max-md:max-w-full">
          <div className="mt-32 text-4xl font-medium tracking-tight text-center leading-[55.08px] text-slate-50 max-md:mt-10 max-md:max-w-full">
            Hear from our satisfied customers
          </div>
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-9 py-8 w-full text-base rounded-lg border border-green-600 border-solid max-md:px-5 max-md:mt-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src={stars5}
                  className="max-w-full aspect-[5] w-[110px]"
                />
                <div className="mt-5 font-medium leading-6 text-slate-50">
                  Humanize ingeniously transformed complex jargon into more
                  accessible language while maintaining the core ideas intact.
                  This clever maneuver not only elevated the essay's readability
                  but also showcased Its exceptional aptitude in navigating
                  AI-driven scrutiny. Such innovations highlight the remarkable
                  potential of Humanize in assisting individuals to effectively
                  communicate their ideas while strategically bypassing AI content
                  checks.
                </div>
                <div className="flex gap-4 mt-5 font-semibold leading-[150%] text-slate-300">
                  <img
                    loading="lazy"
                    srcSet=""
                    className="shrink-0 rounded-full border border-green-500 border-solid aspect-square w-[63px]"
                  />
                  <div className="my-auto">Jeronimo Barbery</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-9 py-8 w-full text-base rounded-lg border border-green-600 border-solid max-md:px-5 max-md:mt-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src={stars5}
                  className="max-w-full aspect-[5] w-[110px]"
                />
                <div className="mt-5 font-medium leading-6 text-slate-50">
                  Best that will change the way you work with artificial
                  intelligence. AI Bypass is an innovative software tool that
                  allows you to bypass the limitations of your current AI system
                  and achieve better results.With AI Bypass, you can take full
                  control of your AI models and optimize them for maximum
                  performance. The software's powerful algorithms analyze your
                  data and identify patterns that your AI model might have missed,
                  allowing you to improve its accuracy and reduce errors.
                </div>
                <div className="flex gap-4 mt-5 font-semibold leading-[150%] text-slate-300">
                  <img
                    loading="lazy"
                    srcSet=""
                    className="shrink-0 rounded-full border border-green-500 border-solid aspect-square w-[63px]"
                  />
                  <div className="my-auto">Christian Harper</div>
                </div>
              </div>
            </div>


            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-9 py-8 w-full text-base rounded-lg border border-green-600 border-solid max-md:px-5 max-md:mt-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src={stars5}
                  className="max-w-full aspect-[5] w-[110px]"
                />
                <div className="mt-5 font-medium leading-6 text-slate-50">
                  One feature that truly sets Humanize apart is its ability to
                  bypass any AI-generated content restrictions. In today's world,
                  where AI-generated content often faces restrictions on various
                  platforms, this bypass feature is a game-changer. It ensures
                  that your content not only meets your high standards but also
                  complies with platform guidelines, giving you peace of mind.
                </div>
                <div className="flex gap-4 mt-5 font-semibold leading-[150%] text-slate-300">
                  <img
                    loading="lazy"
                    srcSet=""
                    className="shrink-0 rounded-full border border-green-500 border-solid aspect-square w-[63px]"
                  />
                  <div className="my-auto">Aqsa Khalid</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerFeedback

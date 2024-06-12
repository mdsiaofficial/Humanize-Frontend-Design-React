import React from 'react'
import HumanizeBox from '../Components/HumanizeBox'
import ProFeatures from '../Components/ProFeatures';
import { arrowright, bypassfeat, bypasssoln, check1, checkforai, howitworks } from '../Global/Imports';
import Bypass from '../Components/Bypass';
import HowItWorks from '../Components/HowItWorks';
import FAQ from '../Components/FAQ';
import AiDetection from '../Components/AiDetection';
import { Switch } from '@mui/material';
import BypassSoln from '../Components/BypassSoln';
import BypassFeat from '../Components/BypassFeat';
import FAQ2 from '../Components/FAQ2';
import FAQ3 from '../Components/FAQ3';
import FlexiblePrice from '../Components/FlexiblePrice';

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-10 bg-slate-900">
        <header className="flex flex-col items-center pt-10 bg-slate-900">
          {/* heading */}
          <div className="mt-18 text-6xl font-semibold tracking-tighter text-center text-white leading-[65px] w-[860px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            <span className="font-medium">Transform AI writing into natural  human text with </span>
            <span className="font-medium text-violet-400">humanize!</span>
          </div>
          <div className="mt-6 text-lg font-medium leading-7 text-center text-slate-200 max-md:max-w-full">
            Advanced AI humanization to bypass AI detection effortlessly.
          </div>

        </header>

        {/* humanize box */}
        <HumanizeBox />

      </div>

      {/* Bypass all part */}
      <Bypass />

      {/* How it Works end */}
      <HowItWorks />
      {/* How it Works end */}

      {/* Pro Features */}
      <ProFeatures />


      <div className="flex flex-col items-center self-stretch px-16 mt-12 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">

        {/* AI Detection */}
        <AiDetection />
        {/* AI Detection */}


        {/* FAQ */}
        <FAQ />
        {/* FAQ */}

        {/* Bypass Soln */}
        <BypassSoln />
        {/* Bypass Soln */}


        {/* FAQ2 */}
        <FAQ2 />
        {/* FAQ2 */}

        {/* Bypass Feature */}
        <BypassFeat />
        {/* Bypass Feature */}

        {/* FAQ3 */}
        <FAQ3/>
        {/* FAQ3 */}

        {/* Flexible */}
        <FlexiblePrice/>
        {/* Flexible */}



        <div className="mt-32 text-4xl font-medium tracking-tight text-center leading-[55.08px] text-slate-50 max-md:mt-10 max-md:max-w-full">
          Hear from our satisfied customers
        </div>
      </div>
      <div className="px-5 mt-12 w-full max-w-[1319px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-9 py-8 w-full text-base rounded-lg border border-green-600 border-solid max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <img
                loading="lazy"
                src=""
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
                src=""
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
                src=""
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
      <div className="mt-32 text-4xl font-medium tracking-tight text-center leading-[55.08px] text-slate-50 max-md:mt-10 max-md:max-w-full">
        Got questions? we've got answers.
      </div>
      <div className="shrink-0 mt-9 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
      <div className="flex gap-5 px-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
        <div className="flex-auto max-md:max-w-full">
          How does Humanize ensure the content remains undetectable by AI
          detectors?
        </div>
        <img
          loading="lazy"
          src=""
          className="shrink-0 w-8 aspect-square"
        />
      </div>
      <div className="mt-7 text-base font-medium leading-6 text-slate-300 max-md:max-w-full">
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
        <img
          loading="lazy"
          src=""
          className="shrink-0 w-8 aspect-square"
        />
      </div>
      <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
      <div className="flex gap-5 px-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
        <div className="flex-auto max-md:max-w-full">
          {" "}
          Is Humanize suitable for academic or business writing?
        </div>
        <img
          loading="lazy"
          src=""
          className="shrink-0 w-8 aspect-square"
        />
      </div>
      <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
      <div className="flex gap-5 px-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
        <div className="flex-auto max-md:max-w-full">
          What kind of customization options does Humanize offer?
        </div>
        <img
          loading="lazy"
          src=""
          className="shrink-0 w-8 aspect-square"
        />
      </div>
      <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
      <div className="flex gap-5 px-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
        <div className="flex-auto max-md:max-w-full">
          {" "}
          Is there a trial period for Humanize, and what does it include?
        </div>
        <img
          loading="lazy"
          src=""
          className="shrink-0 w-8 aspect-square"
        />
      </div>
      <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
      <div className="flex flex-col items-center px-16 pt-12 pb-20 mt-20 w-full font-medium rounded-lg border-2 border-solid border-slate-500 max-w-[1319px] text-slate-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center mb-3 max-w-full w-[689px]">
          <img
            loading="lazy"
            src=""
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
            <div>Start Your Humanize Journey</div>
            <img
              loading="lazy"
              src=""
              className="shrink-0 my-auto aspect-square w-[18px]"
            />
          </div>
        </div>
      </div>


    </>
  );
}
export default Home

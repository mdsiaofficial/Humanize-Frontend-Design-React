import React from 'react'
import { ar1, logo, logo2, arrowright, bypassfeat, bypasssoln, check1, check2, checkcircleicon, checkforai, content, ellipse, flag, framein, frameout, gram1, howitworks, msg, path, plus, rectangle, score, spark1, stars5, upload, vector, web, write1, checkai } from '../Global/Imports.jsx';
const AiDetection = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-40 text-4xl font-medium tracking-tight leading-10 text-center text-slate-50 w-[650px] max-md:mt-10 max-md:max-w-full">
          Say Goodbye to AI Content Detection Woes and Hello to Top Rankings
        </div>
        <div className="mt-9 w-full max-w-[1090px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">

            {/* box img */}
            <img
              loading="lazy"
              src={checkforai}
              className="self-center max-w-full"
            />

            {/* box */}
            {/* <div className="flex flex-col px-14 py-8 text-lg font-medium leading-7 shadow-2xl backdrop-blur-[53.48258590698242px] bg-stone-300 bg-opacity-0 max-w-[430px] rounded-[59.9px]">
              <img
                loading="lazy"
                src={checkai}
                className="self-center max-w-full aspect-[1.18] w-[222px]"
              />
              <div className="mt-6 bg-clip-text">
                Steph took a photo of her carefully arranged breakfast and flowers. Her
                eggs and her coffee had gone cold, but the plate looked really cool. It
                was from an expensive art market she had visited that morning. The
                flowers were ones she'd 'borrowed' from her neighbour's garden. No one
                had noticed. Besides, she thought, flowers are
              </div>
            </div> */}
            {/* box end */}

            <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
              <div className="text-base font-medium leading-6 text-slate-300 max-md:mt-10 max-md:max-w-full">
                Are you tired of feeling like you're battling against a robotic
                overlord every time you write content? Do you find yourself
                constantly tweaking and adjusting your words to satisfy the
                whims of AI algorithms? Well, it's time to say goodbye to those
                AI detection woes and hello to the top rankings.
                <br />
                <br />
                With our innovative Bypass AI detection tool, you can finally
                write without fear of falling short in the eyes of AI
                algorithms. Our bypass AI detection tool uses sophisticated AI
                bypass technology to ensure that your content meets the
                requirements of search engines and resonates with your audience.
                <br />
                <br />
                No more tedious, mind-numbing work trying to appease the robots.
                Our bypass AI text detection tool does the heavy lifting for
                you, freeing you up to focus on what you do best - creating
                engaging, high-quality AI generated text that connects with your
                audience.
                <br />
                So, if you're ready to say goodbye to the headaches of AI
                content detection and hello to top rankings, look no further
                than our bypass AI text detection tool. It's the secret weapon
                you need to take your content to the next level and achieve your
                desired success.
              </div>
            </div>
          </div>
        </div>
        <button className="flex gap-1 justify-center px-6 py-4 mt-3.5 ml-40 text-base font-semibold leading-6 bg-violet-600 rounded border border-violet-300 border-solid text-slate-50 max-md:px-5">
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

export default AiDetection

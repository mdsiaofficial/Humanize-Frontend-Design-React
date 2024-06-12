import React from 'react'
import HumanizeBox from '../Components/HumanizeBox'
import ProFeatures from '../Components/ProFeatures';

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

        {/* Bypass all part */}
        <div className="self-center mt-40 text-4xl font-medium tracking-tight text-center leading-[55.08px] text-slate-50 max-md:mt-10 max-md:max-w-full">
          Bypass all popular ai detectors
        </div>
      </div>
      <div className="flex gap-3 px-5 mt-10 text-base font-medium leading-6 whitespace-nowrap text-slate-50 max-md:flex-wrap">
        <div className="flex gap-2 justify-center px-6 py-3 border-2 border-solid bg-slate-900 border-slate-500 rounded-[50px] max-md:px-5">
          <img
            loading="lazy"
            src=""
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>OpenAI</div>
        </div>
        <div className="flex gap-2 justify-center px-6 py-3 border-2 border-solid bg-slate-900 border-slate-500 rounded-[50px] max-md:px-5">
          <img
            loading="lazy"
            src=""
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>GPTZero</div>
        </div>
        <div className="flex gap-2 justify-center px-6 py-3 border-2 border-solid bg-slate-900 border-slate-500 rounded-[50px] max-md:px-5">
          <img
            loading="lazy"
            src=""
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>CrossPlag</div>
        </div>
        <div className="flex gap-2 justify-center px-7 py-3 border-2 border-solid bg-slate-900 border-slate-500 rounded-[50px] max-md:px-5">
          <img
            loading="lazy"
            src=""
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>ContentAtScale</div>
        </div>
        <div className="flex gap-2 justify-center px-6 py-3 border-2 border-solid bg-slate-900 border-slate-500 rounded-[50px] max-md:px-5">
          <img
            loading="lazy"
            src=""
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>Sapling</div>
        </div>
        <div className="flex gap-2 justify-center px-6 py-3 border-2 border-solid bg-slate-900 border-slate-500 rounded-[50px] max-md:px-5">
          <img
            loading="lazy"
            src=""
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>CopyLeaks</div>
        </div>
        <div className="flex gap-2 justify-center px-6 py-3 border-2 border-solid bg-slate-900 border-slate-500 rounded-[50px] max-md:px-5">
          <img
            loading="lazy"
            src=""
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>ZeroGPT</div>
        </div>
        <div className="flex gap-2 justify-center px-6 py-3 border-2 border-solid bg-slate-900 border-slate-500 rounded-[50px] max-md:px-5">
          <img
            loading="lazy"
            src=""
            src=""
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>Turnitin</div>
        </div>
      </div>
      <div className="mt-32 text-4xl font-medium tracking-tight text-center leading-[55.08px] text-slate-50 max-md:mt-10">
        How it works
      </div>
      <div className="mt-6 w-full max-w-[1119px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
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
              srcSet=""
              className="grow w-full aspect-[1.1] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      {/* Pro Features */}
      <ProFeatures />
      {/* AI Detection */}
      <div className="flex flex-col items-center self-stretch px-16 mt-12 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="mt-40 text-4xl font-medium tracking-tight leading-10 text-center text-slate-50 w-[650px] max-md:mt-10 max-md:max-w-full">
          Say Goodbye to AI Content Detection Woes and Hello to Top Rankings
        </div>
        <div className="mt-9 w-full max-w-[1090px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-14 pt-20 pb-10 w-full text-lg font-medium leading-7 shadow-2xl backdrop-blur-[53.48258590698242px] bg-stone-300 bg-opacity-0 rounded-[59.9px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="mt-40 bg-clip-text max-md:mt-10 max-md:mr-1">
                  Steph took a photo of her carefully arranged breakfast and
                  flowers. Her eggs and her coffee had gone cold, but the plate
                  looked really cool. It was from an expensive art market she
                  had visited that morning. The flowers were ones she'd
                  'borrowed' from her neighbour's garden. No one had
                  noticed. Besides, she thought, flowers are
                </div>
              </div>
            </div>
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
        <div className="flex gap-1 justify-center px-6 py-4 mt-3.5 ml-40 text-base font-semibold leading-6 bg-violet-600 rounded border border-violet-300 border-solid text-slate-50 max-md:px-5">
          <div>Start Your Humanize Journey</div>
          <img
            loading="lazy"
            src=""
            className="shrink-0 my-auto aspect-square w-[18px]"
          />
        </div>
        <div className="shrink-0 mt-20 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px] max-md:mt-10" />
        <div className="flex gap-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
          <div className="flex-auto">
            How can I Bypass AI Detection Using AISEO?
          </div>
          <img
            loading="lazy"
            src=""
            className="shrink-0 w-8 aspect-square"
          />
        </div>
        <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
        <div className="flex gap-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
          <div className="flex-auto max-md:max-w-full">
            What is AI content detection, and why is it important?
          </div>
          <img
            loading="lazy"
            src=""
            className="shrink-0 w-8 aspect-square"
          />
        </div>
        <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
        <div className="flex gap-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
          <div className="flex-auto max-md:max-w-full">
            How does AI content detection affect my website's rankings?
          </div>
          <img
            loading="lazy"
            src=""
            className="shrink-0 w-8 aspect-square"
          />
        </div>
        <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
        <div className="flex gap-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
          <div className="flex-auto max-md:max-w-full">
            Can I still rank high in search results without bypassing AI
            detection?
          </div>
          <img
            loading="lazy"
            src=""
            className="shrink-0 w-8 aspect-square"
          />
        </div>
        <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
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
                srcSet=""
                className="mt-28 w-full aspect-[1.01] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-1 justify-center self-start px-6 py-4 mt-14 ml-28 text-base font-semibold leading-6 bg-violet-600 rounded border border-violet-300 border-solid text-slate-50 max-md:px-5 max-md:mt-10 max-md:ml-2.5">
          <div>Start Your Humanize Journey</div>
          <img
            loading="lazy"
            src=""
            className="shrink-0 my-auto aspect-square w-[18px]"
          />
        </div>
        <div className="shrink-0 mt-20 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px] max-md:mt-10" />
        <div className="flex gap-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
          <div className="flex-auto">Is bypassing AI detection ethical?</div>
          <img
            loading="lazy"
            src=""
            className="shrink-0 w-8 aspect-square"
          />
        </div>
        <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
        <div className="flex gap-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
          <div className="flex-auto max-md:max-w-full">
            How does bypassing AI content detection work?
          </div>
          <img
            loading="lazy"
            src=""
            className="shrink-0 w-8 aspect-square"
          />
        </div>
        <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
        <div className="flex gap-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
          <div className="flex-auto max-md:max-w-full">
            Will bypassing AI content detection guarantee me top rankings?
          </div>
          <img
            loading="lazy"
            src=""
            className="shrink-0 w-8 aspect-square"
          />
        </div>
        <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
        <div className="flex gap-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
          <div className="flex-auto max-md:max-w-full">
            What are the potential consequences of not bypassing AI content
            detection?
          </div>
          <img
            loading="lazy"
            src=""
            className="shrink-0 w-8 aspect-square"
          />
        </div>
        <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
        <div className="mt-32 text-4xl font-medium tracking-tight leading-10 text-center text-slate-50 w-[650px] max-md:mt-10 max-md:max-w-full">
          Experience the Magic of Authentic Content with Our Bypass Feature
        </div>
        <div className="mt-10 w-full max-w-[1116px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src=""
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
        <div className="flex gap-1 justify-center px-6 py-4 mt-12 ml-40 text-base font-semibold leading-6 bg-violet-600 rounded border border-violet-300 border-solid text-slate-50 max-md:px-5 max-md:mt-10">
          <div>Start Your Humanize Journey</div>
          <img
            loading="lazy"
            src=""
            className="shrink-0 my-auto aspect-square w-[18px]"
          />
        </div>
        <div className="shrink-0 mt-20 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px] max-md:mt-10" />
        <div className="flex gap-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
          <div className="flex-auto max-md:max-w-full">
            How often should I use a bypass AI detection tool?
          </div>
          <img
            loading="lazy"
            src=""
            className="shrink-0 w-8 aspect-square"
          />
        </div>
        <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
        <div className="flex gap-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
          <div className="flex-auto max-md:max-w-full">
            Are there any risks associated with using a bypass AI detection
            tool?
          </div>
          <img
            loading="lazy"
            src=""
            className="shrink-0 w-8 aspect-square"
          />
        </div>
        <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
        <div className="flex gap-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
          <div className="flex-auto max-md:max-w-full">
            What types of content can be bypassed by AI content detection?
          </div>
          <img
            loading="lazy"
            src=""
            className="shrink-0 w-8 aspect-square"
          />
        </div>
        <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
        <div className="flex gap-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
          <div className="flex-auto max-md:max-w-full">
            Are there any best practices for using a bypass AI content detection
            tool?
          </div>
          <img
            loading="lazy"
            src=""
            className="shrink-0 w-8 aspect-square"
          />
        </div>
        <div className="shrink-0 mt-3.5 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
        <div className="mt-32 text-4xl font-medium tracking-tight text-center leading-[55.08px] text-slate-50 max-md:mt-10 max-md:max-w-full">
          Flexible pricing for every need
        </div>
        <div className="mt-7 text-base font-medium leading-6 text-center text-slate-200 max-md:max-w-full">
          Simple, transparent pricing that grows with you. Try any plan free for
          30 days. Save 20% with annual.
        </div>
        <div className="flex gap-3 items-center mt-9 max-w-full w-[278px]">
          <div className="grow self-stretch my-auto text-base font-medium leading-6 text-slate-100">
            Billed monthly
          </div>
          <div className="flex flex-col justify-center self-stretch">
            <div className="flex flex-col justify-center items-start px-7 py-1.5 bg-violet-600 rounded-[61.364px] max-md:pl-5">
              <div className="shrink-0 w-5 h-5 bg-white rounded-full" />
            </div>
          </div>
          <div className="self-stretch my-auto text-base font-medium leading-6 text-slate-100">
            Billed yearly
          </div>
        </div>
        <div className="mt-12 w-full max-w-[1097px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-6 pt-20 pb-11 mx-auto w-full rounded-2xl border-2 border-solid border-slate-500 text-slate-100 max-md:px-5 max-md:mt-4">
                <div className="text-lg font-medium tracking-tight leading-[55.08px] text-slate-200">
                  Basic
                </div>
                <div className="flex gap-1 mt-4 whitespace-nowrap text-slate-50">
                  <div className="grow text-4xl font-semibold tracking-tight leading-[55.08px]">
                    $9.99
                  </div>
                  <div className="flex-auto self-start mt-4 text-base font-medium leading-6">
                    /mo
                  </div>
                </div>
                <div className="flex gap-2 mt-12 text-base font-medium leading-6 max-md:mt-10">
                  <img
                    loading="lazy"
                    src=""
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">20,000 words/month</div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src=""
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">
                    Basic Humanization Features
                  </div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src=""
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">
                    Language Support: 2 languages
                  </div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src=""
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">Email Support</div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src=""
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">
                    Access to Standard Engine
                  </div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src=""
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">
                    Basic AI Detector Evasion
                  </div>
                </div>
                <div className="justify-center items-center px-6 py-4 mt-36 text-base font-semibold leading-6 text-white bg-violet-600 rounded border border-violet-300 border-solid max-md:px-5 max-md:mt-10">
                  Start Basic Plan
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pt-6 pb-11 w-full rounded-2xl border-2 border-solid border-slate-500 max-md:mt-4">
                <div className="justify-center self-end px-3 py-0.5 mr-6 text-base font-medium leading-6 text-white whitespace-nowrap bg-green-700 border border-emerald-300 border-solid rounded-[50px] max-md:mr-2.5">
                  Popular
                </div>
                <div className="flex flex-col px-6 mt-6 text-slate-100 max-md:px-5">
                  <div className="text-lg font-medium tracking-tight leading-[55.08px] text-slate-200">
                    Standard
                  </div>
                  <div className="flex gap-1 mt-4 whitespace-nowrap text-slate-50">
                    <div className="grow text-4xl font-semibold tracking-tight leading-[55.08px]">
                      $29.99
                    </div>
                    <div className="flex-auto self-start mt-4 text-base font-medium leading-6">
                      /mo
                    </div>
                  </div>
                  <div className="flex gap-2 mt-12 text-base font-medium leading-6 max-md:mt-10">
                    <img
                      loading="lazy"
                      src=""
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div className="flex-auto my-auto">100,000 words/month</div>
                  </div>
                  <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                    <img
                      loading="lazy"
                      src=""
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div className="flex-auto my-auto">
                      Advanced Humanization Features
                    </div>
                  </div>
                  <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                    <img
                      loading="lazy"
                      src=""
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div className="flex-auto my-auto">
                      Language Support: 5 languages
                    </div>
                  </div>
                  <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                    <img
                      loading="lazy"
                      src=""
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div className="flex-auto my-auto">
                      Priority Email Support
                    </div>
                  </div>
                  <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                    <img
                      loading="lazy"
                      src=""
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div className="flex-auto my-auto">
                      Access to Advanced Engine
                    </div>
                  </div>
                  <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                    <img
                      loading="lazy"
                      src=""
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div className="flex-auto my-auto">
                      Improved AI Detector Evasion
                    </div>
                  </div>
                  <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                    <img
                      loading="lazy"
                      src=""
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div className="flex-auto my-auto">
                      Content Style Diversity Options
                    </div>
                  </div>
                  <div className="justify-center px-11 py-4 mt-24 text-base font-semibold leading-6 text-white bg-violet-600 rounded border border-violet-300 border-solid max-md:px-8 max-md:mt-10">
                    Start Standard Plan
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-6 pt-20 pb-11 mx-auto w-full rounded-2xl border-2 border-solid border-slate-500 text-slate-100 max-md:px-5 max-md:mt-4">
                <div className="text-lg font-medium tracking-tight leading-[55.08px] text-slate-200">
                  Premium
                </div>
                <div className="flex gap-1 mt-4 whitespace-nowrap text-slate-50">
                  <div className="grow text-4xl font-semibold tracking-tight leading-[55.08px]">
                    $59.99
                  </div>
                  <div className="flex-auto self-start mt-4 text-base font-medium leading-6">
                    /mo
                  </div>
                </div>
                <div className="flex gap-2 mt-12 text-base font-medium leading-6 max-md:mt-10">
                  <img
                    loading="lazy"
                    src=""
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">300,000 words/month</div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src=""
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">All Advanced Features</div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src=""
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">
                    Unlimited Language Support
                  </div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src=""
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">
                    Priority Phone and Email Support
                  </div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src=""
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">
                    Access to Premium Engine
                  </div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src=""
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">Advanced AI Detector</div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src=""
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">
                    Real-Time Human Score Analysis
                  </div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src=""
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">
                    Dedicated Account Manager
                  </div>
                </div>
                <div className="justify-center items-center px-6 py-4 mt-14 text-base font-semibold leading-6 text-white bg-violet-600 rounded border border-violet-300 border-solid max-md:px-5 max-md:mt-10">
                  Start Premium Plan
                </div>
              </div>
            </div>
          </div>
        </div>
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

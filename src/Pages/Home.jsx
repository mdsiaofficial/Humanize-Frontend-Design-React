import React from 'react'
import HumanizeBox from '../Components/HumanizeBox'

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
        {/* <div className="flex flex-col self-stretch px-20 mt-12 w-full text-base max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 w-full font-medium leading-[156%] text-slate-50 max-md:flex-wrap max-md:mr-1.5 max-md:max-w-full">
          <div className="flex flex-auto gap-2 my-auto max-md:flex-wrap">
            <div className="flex gap-1 px-3.5 py-1.5 whitespace-nowrap border border-solid bg-slate-700 border-slate-600 rounded-[150px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c6c9f24c5b11d7cf9857cb8308cacab326bcabe96026c7fca87e34082b4e309?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                className="shrink-0 my-auto w-4 aspect-square"
              />
              <div>Standard</div>
            </div>
            <div className="flex gap-1 px-3.5 py-1.5 whitespace-nowrap bg-slate-900 rounded-[50px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb0772c9d88da4c4f8a654aeefbd1d3200373c3ced0db6077b3027d6791138a8?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                className="shrink-0 self-start w-6 aspect-square"
              />
              <div>Shorten</div>
            </div>
            <div className="flex gap-1 px-3.5 py-1.5 whitespace-nowrap bg-slate-900 rounded-[50px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/73c8a16ad0854980e89290f6d5e5dc18eab4f83751a89e269bbe389e764a1109?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                className="shrink-0 self-start w-6 aspect-square"
              />
              <div>Expand</div>
            </div>
            <div className="flex gap-1 px-3.5 py-1.5 whitespace-nowrap bg-slate-900 rounded-[50px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8af8313feb2a8fafd4ed9adca6965afa13ceb8a2ad9a52f635112585862bcf5c?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                className="shrink-0 my-auto aspect-square w-[18px]"
              />
              <div>Simplify</div>
            </div>
            <div className="flex gap-1 px-3.5 py-1.5 bg-slate-900 rounded-[50px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d77e8681c5dc2a71ad35813d4f4cb90ac09b2be9289dafc4ad68d345cc1763b?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                className="shrink-0 self-start aspect-square w-[21px]"
              />
              <div>Improve Writing</div>
            </div>
          </div>
          <div className="flex flex-auto gap-3 max-md:flex-wrap">
            <div className="flex gap-3 px-4 py-2.5 rounded-md border-2 border-solid bg-slate-900 border-slate-500">
              <div className="flex-1">English (UK)</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0cedb1b8c17382327b4a1d6695b44f454136dcb93b912a4b45dc2cb66a17d70?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                className="shrink-0 my-auto w-4 aspect-square"
              />
            </div>
            <div className="flex gap-2 justify-center px-6 py-2.5 rounded-md border-2 border-solid bg-slate-900 border-slate-500 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/896089fdded4ca811f3a6719495cb101dcaddaf1eeacf5a9f18897e879d23faf?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                className="shrink-0 my-auto aspect-[0.93] w-[13px]"
              />
              <div>Set Goals</div>
            </div>
            <div className="flex gap-2 justify-center px-6 py-2.5 rounded-md border-2 border-solid bg-slate-900 border-slate-500 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4866c212652d7a0be7a971ecbf774cccb909f3d3c303c45a57b4f885fc0dfd0c?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                className="shrink-0 my-auto aspect-[0.93] fill-purple-400 w-[15px]"
              />
              <div>Super Charge</div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-24 ml-7 max-w-full w-[958px] max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-col self-start">
            <div className="font-semibold leading-[150%] text-slate-50">
              Original:
            </div>
            <div className="mt-5 font-medium leading-[156%] text-slate-200">
              Paste text here...
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold leading-[150%] text-slate-50">
              Humanized:
            </div>
            <div className="mt-6 font-medium leading-[156%] text-slate-200">
              Your humanized text will appear here...
            </div>
          </div>
        </div>
        <div className="flex gap-3 self-start mt-96 ml-72 font-semibold text-white leading-[150%] max-md:mt-10 max-md:ml-2.5">
          <div className="flex flex-1 gap-1 justify-center px-6 py-3 rounded-md border-2 border-solid bg-slate-800 border-slate-600 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f41d26b95339065d69f8bd307886147fac9a4fb345322914a38857f353767410?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
              className="shrink-0 my-auto w-5 aspect-square"
            />
            <div>Check for AI</div>
          </div>
          <div className="flex flex-1 gap-1 justify-center px-6 py-3 whitespace-nowrap bg-violet-600 rounded border border-violet-300 border-solid max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/45f38810db4dbfbede824b14406c9693a70d0485fd643efe3aaf70dd85f3489f?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
              className="shrink-0 w-6 aspect-[0.96]"
            />
            <div>Humanize</div>
          </div>
        </div> */}

        {/* Bypass all part */}
        <div className="self-center mt-40 text-4xl font-medium tracking-tight text-center leading-[55.08px] text-slate-50 max-md:mt-10 max-md:max-w-full">
          Bypass all popular ai detectors
        </div>
      </div>
      <div className="flex gap-3 px-5 mt-10 text-base font-medium leading-6 whitespace-nowrap text-slate-50 max-md:flex-wrap">
        <div className="flex gap-2 justify-center px-6 py-3 border-2 border-solid bg-slate-900 border-slate-500 rounded-[50px] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/084b76c84beb256185ab0002b150894a6008eac76d3023debcd8561a97cf7231?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>OpenAI</div>
        </div>
        <div className="flex gap-2 justify-center px-6 py-3 border-2 border-solid bg-slate-900 border-slate-500 rounded-[50px] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/484cf8d2deb684d09016a5180fa3ede30728c57f6f11a9258651d18109d590d5?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>GPTZero</div>
        </div>
        <div className="flex gap-2 justify-center px-6 py-3 border-2 border-solid bg-slate-900 border-slate-500 rounded-[50px] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e50337f55c15c1a8ad269f05d1f027d4845e4646c49d84db2b09b6fd39843d4d?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>CrossPlag</div>
        </div>
        <div className="flex gap-2 justify-center px-7 py-3 border-2 border-solid bg-slate-900 border-slate-500 rounded-[50px] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5fee92b89e4f62e7219c62a63915cf305ff0fd484271ff62d165a34177be182?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>ContentAtScale</div>
        </div>
        <div className="flex gap-2 justify-center px-6 py-3 border-2 border-solid bg-slate-900 border-slate-500 rounded-[50px] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/25612fb33c851dde1feb0e81f03828a375a05e6958efadffba5613d672641aa4?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>Sapling</div>
        </div>
        <div className="flex gap-2 justify-center px-6 py-3 border-2 border-solid bg-slate-900 border-slate-500 rounded-[50px] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a3649b73c8ea583cdbbb743d309223787a8804529b99530b61e52fdb1b20341?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>CopyLeaks</div>
        </div>
        <div className="flex gap-2 justify-center px-6 py-3 border-2 border-solid bg-slate-900 border-slate-500 rounded-[50px] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f7604969e9880a68497871be66950414b75e80866589258fca59b40b6b98bdc?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>ZeroGPT</div>
        </div>
        <div className="flex gap-2 justify-center px-6 py-3 border-2 border-solid bg-slate-900 border-slate-500 rounded-[50px] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d32ef73044327bec58b3f2e2403b082c1b4fe3845aa69338d3ecad32acff9612?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c60e84c7729311a8347125c9d3cbbdc2d698a3aa2d39bc15ddc68784b5025503?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c60e84c7729311a8347125c9d3cbbdc2d698a3aa2d39bc15ddc68784b5025503?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c60e84c7729311a8347125c9d3cbbdc2d698a3aa2d39bc15ddc68784b5025503?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c60e84c7729311a8347125c9d3cbbdc2d698a3aa2d39bc15ddc68784b5025503?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c60e84c7729311a8347125c9d3cbbdc2d698a3aa2d39bc15ddc68784b5025503?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c60e84c7729311a8347125c9d3cbbdc2d698a3aa2d39bc15ddc68784b5025503?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c60e84c7729311a8347125c9d3cbbdc2d698a3aa2d39bc15ddc68784b5025503?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c60e84c7729311a8347125c9d3cbbdc2d698a3aa2d39bc15ddc68784b5025503?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
              className="grow w-full aspect-[1.1] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="mt-32 text-4xl font-medium tracking-tight text-center leading-[55.08px] text-slate-50 max-md:mt-10">
        Humanize Pro Features
      </div>
      <div className="flex flex-col items-center self-stretch px-16 mt-12 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="self-stretch max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center px-8 pt-8 pb-16 w-full font-medium text-center rounded-lg border-2 border-solid border-slate-500 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/df0a4d8575f0e7e1e219d4cb401635554b58f251e9e06e5ce5ab657482509255?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                  className="aspect-[1.02] w-[61px]"
                />
                <div className="mt-8 text-2xl tracking-tight text-white leading-[54.96px]">
                  Content Shaping
                </div>
                <div className="self-stretch mt-5 text-base leading-6 text-slate-300">
                  Whether you need to shorten, expand, simplify, or refine your
                  writing, HumanizePro offers targeted transformations to meet
                  your specific goals. Tailor your content to fit the precise
                  tone, length, and complexity you desire.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center px-8 pt-8 pb-16 w-full font-medium text-center rounded-lg border-2 border-solid border-slate-500 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a4b8697734976d0bf7a46f1a244be2d18385f9bfcb3de99a3c1ff9500fb8c56?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                  className="aspect-[1.02] w-[61px]"
                />
                <div className="mt-8 text-2xl tracking-tight text-white leading-[54.96px]">
                  Multilingual Mastery
                </div>
                <div className="self-stretch mt-5 text-base leading-6 text-slate-300">
                  With support for multiple languages, HumanizePro breaks down
                  linguistic barriers. Perfect for global reach, it ensures your
                  content resonates with audiences no matter their language.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center px-8 pt-8 pb-20 w-full font-medium text-center rounded-lg border-2 border-solid border-slate-500 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dca886829887e4bdac82b5fdaf136ba42d3ca455f69706c9f94cef6bd3f7035?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                  className="aspect-[1.02] w-[61px]"
                />
                <div className="mt-8 text-2xl tracking-tight text-white leading-[54.96px]">
                  Readability Boost
                </div>
                <div className="self-stretch mt-5 text-base leading-6 text-slate-300">
                  Enhance the readability of your content for a wider audience.
                  Our tool simplifies complex ideas, making your writing more
                  accessible and engaging.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center px-8 pt-8 pb-20 w-full font-medium text-center rounded-lg border-2 border-solid border-slate-500 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/076184b55fa06a3f5e596e9afd1e2a75a8236cfa54d951d1caab324e934066a6?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                  className="aspect-[1.02] w-[61px]"
                />
                <div className="mt-8 text-2xl tracking-tight text-white leading-[54.96px]">
                  Writing Assistant
                </div>
                <div className="self-stretch mt-5 text-base leading-6 text-slate-300">
                  Beyond just spell-checking, HumanizePro polishes your content
                  for grammar, syntax, and style. It's like having a personal
                  editor ensuring your writing is of the highest quality.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center px-8 pt-8 pb-20 w-full font-medium text-center rounded-lg border-2 border-solid border-slate-500 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b817af83f070b410b35f702b2184624cded89bebe04cc28c0538fa096efa63f7?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                  className="aspect-[1.02] w-[61px]"
                />
                <div className="mt-8 text-2xl tracking-tight text-white leading-[54.96px]">
                  Human Score
                </div>
                <div className="self-stretch mt-6 text-base leading-6 text-slate-300">
                  Get real-time feedback on how human-like your content is. This
                  unique feature helps you understand and improve the human feel
                  of your writing, ensuring it connects better with your
                  readers.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center px-6 pt-8 pb-16 w-full font-medium text-center rounded-lg border-2 border-solid border-slate-500 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8bf09b28c9222ba8b561ee95ab095e3540edf23ee492ce8e13c3a97bc94817e?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                  className="aspect-[1.02] w-[61px]"
                />
                <div className="mt-8 text-2xl tracking-tight text-white leading-[54.96px]">
                  Flexible Export
                </div>
                <div className="self-stretch mt-5 text-base leading-6 text-slate-300">
                  With HumanizePro, export your content in various formats to
                  suit your needs. Whether it’s a PDF for a report, a Word
                  document for further editing, or a plain text for online
                  publishing, we've got you covered.
                </div>
              </div>
            </div>
          </div>
        </div>
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75fe4b31a36a5002314bd60456c5dc78607868c80192195514b95e6a5c84b230?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f637547788b379cf8b66871b4e75b20dbb4bf30360d2cacdd181b6ed03b3e76f?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c2e01ddf5a9e2588e1fe04d44a32b9114c04f352ba26c0496873dc300535841?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f637547788b379cf8b66871b4e75b20dbb4bf30360d2cacdd181b6ed03b3e76f?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f637547788b379cf8b66871b4e75b20dbb4bf30360d2cacdd181b6ed03b3e76f?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/03de41dd557d5ce1a5404de3307e2390bea06988298ae3b483ce669cd00f9ed4?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/03de41dd557d5ce1a5404de3307e2390bea06988298ae3b483ce669cd00f9ed4?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03de41dd557d5ce1a5404de3307e2390bea06988298ae3b483ce669cd00f9ed4?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/03de41dd557d5ce1a5404de3307e2390bea06988298ae3b483ce669cd00f9ed4?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/03de41dd557d5ce1a5404de3307e2390bea06988298ae3b483ce669cd00f9ed4?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03de41dd557d5ce1a5404de3307e2390bea06988298ae3b483ce669cd00f9ed4?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/03de41dd557d5ce1a5404de3307e2390bea06988298ae3b483ce669cd00f9ed4?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/03de41dd557d5ce1a5404de3307e2390bea06988298ae3b483ce669cd00f9ed4?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                className="mt-28 w-full aspect-[1.01] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-1 justify-center self-start px-6 py-4 mt-14 ml-28 text-base font-semibold leading-6 bg-violet-600 rounded border border-violet-300 border-solid text-slate-50 max-md:px-5 max-md:mt-10 max-md:ml-2.5">
          <div>Start Your Humanize Journey</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75fe4b31a36a5002314bd60456c5dc78607868c80192195514b95e6a5c84b230?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
            className="shrink-0 my-auto aspect-square w-[18px]"
          />
        </div>
        <div className="shrink-0 mt-20 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px] max-md:mt-10" />
        <div className="flex gap-5 mt-5 max-w-full text-xl font-medium tracking-normal leading-7 text-slate-200 w-[874px] max-md:flex-wrap">
          <div className="flex-auto">Is bypassing AI detection ethical?</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b9809d5ad719b87ef6a41afc6da98a630086918113122e08f82ded4f5debbdd?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b9809d5ad719b87ef6a41afc6da98a630086918113122e08f82ded4f5debbdd?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b9809d5ad719b87ef6a41afc6da98a630086918113122e08f82ded4f5debbdd?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b9809d5ad719b87ef6a41afc6da98a630086918113122e08f82ded4f5debbdd?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c6037e9b6a87f39d5ee6c5b22d57d20a9c48cc19ff3ebc328a72e9f6ce3de09?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75fe4b31a36a5002314bd60456c5dc78607868c80192195514b95e6a5c84b230?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/36ab770d68beea02d2322b5f7f7853f89fd1181fc519632e17d61484c3a0a17c?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/36ab770d68beea02d2322b5f7f7853f89fd1181fc519632e17d61484c3a0a17c?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/36ab770d68beea02d2322b5f7f7853f89fd1181fc519632e17d61484c3a0a17c?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/36ab770d68beea02d2322b5f7f7853f89fd1181fc519632e17d61484c3a0a17c?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/65386e88748fea7f0d78d80d9098494b1a4949d09e4fd017a6249ef762568685?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">20,000 words/month</div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cec9eb8d3bc20cf44f892f19ae6e5a31e6f463bfa4afd4d4bae3e04490de4ff?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">
                    Basic Humanization Features
                  </div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6473785c7feaaa6c871eaeae3dfc827e3107234d3b6b2a4fb57282f664397e67?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">
                    Language Support: 2 languages
                  </div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/68bb94c03b39f724d7dec06e6b049a82e728af45831196625b929fcef06c346b?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">Email Support</div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e277299035ca026da2e66a0752d28614f017719789f2e0a3ece0a2df0fde378?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">
                    Access to Standard Engine
                  </div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f4da16aa72dc71ee9fa24416a1ce566e802365eaf07328a03b345f74cd327cc?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bd3a5cb9c25618db06c33480c3c95b62650dec467c339e06494de2d8ee088c6?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div className="flex-auto my-auto">100,000 words/month</div>
                  </div>
                  <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e535953db03c6567737d124cdde4902c72f30f92c80af12b08d238118907f774?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div className="flex-auto my-auto">
                      Advanced Humanization Features
                    </div>
                  </div>
                  <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3bc82242a1f29f94b6bd31ad47ccbbfa2bd2d4f11a20eb15ad5ba600efb2eaf?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div className="flex-auto my-auto">
                      Language Support: 5 languages
                    </div>
                  </div>
                  <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c20714c65f44d60a185282ac6f9e579a6c56cc1a04dd75ea248429d342119b3b?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div className="flex-auto my-auto">
                      Priority Email Support
                    </div>
                  </div>
                  <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f37df19e449d62a9fb1f0401bb6266f605161c9ca1e0be9ed0c1958e850446b7?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div className="flex-auto my-auto">
                      Access to Advanced Engine
                    </div>
                  </div>
                  <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c11412e44a068a68f7cec33a30cf8157166c35abd02fa5771d01312eaf19f5a?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div className="flex-auto my-auto">
                      Improved AI Detector Evasion
                    </div>
                  </div>
                  <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d823977aeca053771cebc139433f48e150e663d79c0192a40834a7fb1de74a79?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/28939fb2bb2ba89c15a93dd3b708eaa77546ff2665c3a1d0659ef38683c51736?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">300,000 words/month</div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/73e3f57b368ffcb0462c3332007768657df9cd308832d2c6e35dc6925671c3b2?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">All Advanced Features</div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e24e0e732586ceec5f13ed9b664969914015ba5d547df51170149dd69d4b3ed3?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">
                    Unlimited Language Support
                  </div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f487e0d02824b72e8eb4aeb0867ed77749a5df8f9311d1249ef31e69dd4c581a?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">
                    Priority Phone and Email Support
                  </div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5e3f266cd6dd99eb8fa69227f4d6056d75e2725fbf687209eb3d4043742909b?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">
                    Access to Premium Engine
                  </div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d714a037047406e0d114f459c41ff3f0438d53d5089970b0d22cce406750a5b9?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">Advanced AI Detector</div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/03036a4508510b683bb4c49c91fad2845263669419bf90b5bfecd8d8eec3400a?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto my-auto">
                    Real-Time Human Score Analysis
                  </div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-medium leading-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/27cd34ab5f6910c9b5203e9857e267bf5615689072f7e9617fb19eabd13dad8e?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4193c53b09cca23ef9afb2b52516c240247bee6f765e2fcdb5aab6a92be35d5?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ac1b58e50215c26def3b98ddd350acf750ac2e03118553fb73b7aa3ffebe321e?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac1b58e50215c26def3b98ddd350acf750ac2e03118553fb73b7aa3ffebe321e?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac1b58e50215c26def3b98ddd350acf750ac2e03118553fb73b7aa3ffebe321e?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac1b58e50215c26def3b98ddd350acf750ac2e03118553fb73b7aa3ffebe321e?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac1b58e50215c26def3b98ddd350acf750ac2e03118553fb73b7aa3ffebe321e?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac1b58e50215c26def3b98ddd350acf750ac2e03118553fb73b7aa3ffebe321e?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac1b58e50215c26def3b98ddd350acf750ac2e03118553fb73b7aa3ffebe321e?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac1b58e50215c26def3b98ddd350acf750ac2e03118553fb73b7aa3ffebe321e?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a30376898d1498e6046b13d75aa20921f1cbd68d84e1d165d75d81d89a6746f?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/443edb6663c2175ffcec9e1436d28bdac338db964668436f02ad2afadd1e3fd0?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/443edb6663c2175ffcec9e1436d28bdac338db964668436f02ad2afadd1e3fd0?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/443edb6663c2175ffcec9e1436d28bdac338db964668436f02ad2afadd1e3fd0?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/443edb6663c2175ffcec9e1436d28bdac338db964668436f02ad2afadd1e3fd0?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/443edb6663c2175ffcec9e1436d28bdac338db964668436f02ad2afadd1e3fd0?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/443edb6663c2175ffcec9e1436d28bdac338db964668436f02ad2afadd1e3fd0?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/443edb6663c2175ffcec9e1436d28bdac338db964668436f02ad2afadd1e3fd0?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/443edb6663c2175ffcec9e1436d28bdac338db964668436f02ad2afadd1e3fd0?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a12232d8ec3422c3dca62c1fd263993b76db3fa49ee3d32ab4593145e960f48d?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0babafed379df07e6e85cc83683bba655ce738f026eff5194f8d1a9a141e420a?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0babafed379df07e6e85cc83683bba655ce738f026eff5194f8d1a9a141e420a?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0babafed379df07e6e85cc83683bba655ce738f026eff5194f8d1a9a141e420a?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0babafed379df07e6e85cc83683bba655ce738f026eff5194f8d1a9a141e420a?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0babafed379df07e6e85cc83683bba655ce738f026eff5194f8d1a9a141e420a?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0babafed379df07e6e85cc83683bba655ce738f026eff5194f8d1a9a141e420a?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0babafed379df07e6e85cc83683bba655ce738f026eff5194f8d1a9a141e420a?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0babafed379df07e6e85cc83683bba655ce738f026eff5194f8d1a9a141e420a?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c6248d23332f703eaa7777bfbedbe4bd4c12ff828d9873fd599284a435483ee?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef8ffca3d0f86a7357ef0cfb57ee07fbe82c32d017c480d188b75db9a4940302?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef8ffca3d0f86a7357ef0cfb57ee07fbe82c32d017c480d188b75db9a4940302?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef8ffca3d0f86a7357ef0cfb57ee07fbe82c32d017c480d188b75db9a4940302?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef8ffca3d0f86a7357ef0cfb57ee07fbe82c32d017c480d188b75db9a4940302?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
          className="shrink-0 w-8 aspect-square"
        />
      </div>
      <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-slate-600 border-slate-600 w-[878px]" />
      <div className="flex flex-col items-center px-16 pt-12 pb-20 mt-20 w-full font-medium rounded-lg border-2 border-solid border-slate-500 max-w-[1319px] text-slate-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center mb-3 max-w-full w-[689px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9625e4213322bc7bc32d4800bfe78ebdb6019f105ed004191e088c8f8a673530?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/75fe4b31a36a5002314bd60456c5dc78607868c80192195514b95e6a5c84b230?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
              className="shrink-0 my-auto aspect-square w-[18px]"
            />
          </div>
        </div>
      </div>

    
    </>
  );
}
export default Home

import React from 'react'

const Accordion = () => {
  return (
    <div className="flex flex-col p-6 bg-white max-w-[498px] max-md:px-5">
      <div className="flex gap-5 py-4 text-base font-medium leading-6 bg-white shadow-sm text-slate-900 max-md:flex-wrap">
        <div className="flex-1">Is it accessible</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/efd475aed0739ae64ef85401fb05aaae92b6a14dc3f68f267c6f9b2d7920581b?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
          className="shrink-0 my-auto w-4 aspect-square"
        />
      </div>
      <div className="flex gap-5 py-4 text-base font-medium leading-6 bg-white shadow-sm text-slate-900 max-md:flex-wrap">
        <div className="flex-1">is it styled</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/efd475aed0739ae64ef85401fb05aaae92b6a14dc3f68f267c6f9b2d7920581b?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
          className="shrink-0 my-auto w-4 aspect-square"
        />
      </div>
      <div className="flex flex-col pb-4 bg-white shadow-sm max-md:max-w-full">
        <div className="flex gap-5 py-4 text-base font-medium leading-6 bg-white text-slate-900 max-md:flex-wrap">
          <div className="flex-1">Is it anymated</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cff19dcbe3d5dc0bac9399300cae5d26cae85853128e96c62f7df7e4e740542?apiKey=2c09a9944a1f469fa134684c1a2a6ae3&"
            className="shrink-0 my-auto w-4 aspect-square"
          />
        </div>
        <div className="text-sm leading-5 text-slate-900 max-md:max-w-full">
          Yes. It's animated by default, but you can disable it if you prefer.
        </div>
      </div>
    </div>
  );
}

export default Accordion

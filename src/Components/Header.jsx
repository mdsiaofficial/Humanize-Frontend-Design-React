import React from 'react'

const Header = ({title, text}) => {
  return (
    <div>
      <header className="flex flex-col mx-5 lg:mx-auto items-center pt-10 bg-slate-900">
          {/* heading */}
          <div className="mt-6 text-6xl font-semibold tracking-tighter text-center text-white leading-[65px] w-[860px] max-md:mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-10">
          <span className="font-medium">{ title }</span>
            <span className="hidden font-medium text-violet-400">humanize!</span>
          </div>
          <div className="mt-6 text-lg font-medium leading-7 text-center text-slate-200 max-md:max-w-full">
            {text}
          </div>

        </header>
    </div>
  )
}

export default Header

import React from 'react'
import logo from "../../public/logo.png";
import { BiRightArrow } from 'react-icons/bi';
const Footer = () => {
  return (
    <div>
      <div className="self-stretch px-16 py-10 mt-20 w-full bg-gray-900 shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-1.5 text-3xl font-semibold leading-7 text-white whitespace-nowrap max-md:mt-10">
              {/* logo */}
              <section className='flex justify-center items-center'>
                <img
                  loading="lazy"
                  src={logo}
                  className="shrink-0 self-stretch my-auto w-[35px] h-auto"
                />
                <h1 className='text-2xl font-bold'>humanize</h1>

              </section>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
            <div className="text-base font-medium leading-6 text-slate-50 max-md:mt-10">
              © 2024 Humanize | All rights reserved
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 justify-between mt-2 text-base font-medium leading-6 whitespace-nowrap text-slate-50 max-md:mt-10">
              <div>Home</div>
              <div>Pricing</div>
              <div>Contact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

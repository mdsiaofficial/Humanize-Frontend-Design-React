import React from 'react'
import logo from "../../public/logo.png";
import { BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <div className="self-stretch px-16 lg:py-10 lg:mt-20 w-full bg-gray-900 border border-slate-600 shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-1.5 text-3xl font-semibold leading-7 text-white whitespace-nowrap max-md:mt-2">
              {/* logo */}
              <Link to="/"><section className='flex justify-center items-center'>
                <img
                  loading="lazy"
                  src={logo}
                  className="shrink-0 self-stretch my-auto w-[35px] h-auto"
                />
                <h1 className='text-2xl font-bold'>humanize</h1>


              </section></Link>
            </div>
          </div>
          <div className="flex flex-col order-2 lg:order-1 ml-5 w-[38%] mb-5 max-md:ml-0 max-md:w-full">
            <div className="text-base font-medium leading-6 text-slate-50 max-md:mt-2">
              © 2024 Humanize | All rights reserved
            </div>
          </div>
          <div className="flex flex-col order-1 lg:order-2 ml-5 w-[26%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 justify-between mt-2 text-base font-medium leading-6 whitespace-nowrap text-slate-50 max-md:mt-2">
              {/* nav links */}
              
                <Link to="/">Home</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/blog">Blog</Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import logo from "../../public/logo.png";
import { BiRightArrow } from 'react-icons/bi';
const Navbar = () => {
  return (
    <nav className=' p-4 m-4'>

      <div className="flex gap-5 justify-between items-center px-5 text-base text-slate-50 max-md:flex-wrap">

        {/* logo */}
        <section className='flex justify-center items-center'>
          <img
            loading="lazy"
            src={logo}
            className="shrink-0 self-stretch my-auto w-[35px] h-auto"
          />
          <h1 className='text-2xl font-bold'>humanize</h1>

        </section>


        {/* nav links */}
        <section className="flex gap-5 justify-between self-stretch my-auto font-medium whitespace-nowrap leading-[156%]">
          <div>Home</div>
          <div>Pricing</div>
          <div>Contact</div>
          <div>Blog</div>
        </section>

        {/* Upgrade button */}
        <div className="flex gap-1 justify-center self-stretch px-6 py-3 font-semibold bg-violet-600 rounded border border-violet-300 border-solid leading-[150%] max-md:px-5">
          <div>Upgrade to PRO</div>
          <BiRightArrow className="my-auto" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar

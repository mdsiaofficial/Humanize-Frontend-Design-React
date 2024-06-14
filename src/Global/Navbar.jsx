import React from 'react'
import { Link } from 'react-router-dom';
import { ar1, logo, logo2, arrowright, bypassfeat, bypasssoln, check1, check2, checkcircleicon, checkforai, content, ellipse, flag, framein, frameout, gram1, howitworks, msg, path, plus, rectangle, score, spark1, stars5, upload, vector, web, write1 } from '../Global/Imports';

const Navbar = () => {
  return (
    <nav className=' p-2 lg:p-4 m-2 lg:m-4'>

      <div className="flex gap-5 justify-between items-center px-1 lg:px-5 text-base text-slate-50 max-md:flex-wrap">

        {/* logo */}
        <Link to="/"><section className='flex justify-center items-center'>

          <img
            loading="lazy"
            src={logo}
            className="shrink-0 self-stretch my-auto w-[35px] h-auto"
          />
          <h1 className='text-2xl font-bold'>humanize</h1>


        </section></Link>


        {/* nav links */}
        <section className="hidden lg:flex gap-5 justify-between self-stretch my-auto font-medium whitespace-nowrap leading-[156%]">
          <Link to="/">Home</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </section>

        {/* mobile nav */}
        {/* <section>
          <button className="lg:hidden text-slate-50 hover:text-slate-100 transition duration">
            <img src={MenuOpenOutlined} alt="" />
          </button>
          <section className="flex flex-col gap-5 bg-violet-600 py-10 px-10 absolute justify-between self-stretch my-auto font-medium whitespace-nowrap leading-[156%]">
            <Link to="/">Home</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
          </section>
        </section> */}


        {/* Upgrade button */}
        <Link to="/pricing">
          <div className="hidden lg:flex gap-1 justify-center self-stretch px-6 py-3 font-semibold bg-violet-600 rounded border border-violet-300 border-solid leading-[150%] max-md:px-5">

            <div>Upgrade to PRO</div>

            <img src={arrowright} alt="" />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar

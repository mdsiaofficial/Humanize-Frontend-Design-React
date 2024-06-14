import React from 'react'
import { Link } from 'react-router-dom';
import { arrowrightup } from '../Global/Imports';
const BlogCard = ({ title, img }) => {

  return (

    <div>
      <div className="bg-slate-600 text-white lg:w-[427px] lg:h-[510px] rounded-2xl">
        <section className='flex justify-center py-4'>
          <img src={img} alt="" className='w-[355px] h-auto lg:w-[395px] lg:h-[298px]' />
        </section>
        <section className='flex w-[398px] flex-col px-5'>

          <span className=''>June 01, 2024</span>

          <span className='text-[24px] h-[105px] overflow-hidden font-semibold'>{title}</span>

          <Link to="/readblog" title={title} img={img}>
            <button className="flex gap-3 py-2 text-base font-semibold leading-6 hover:text-slate-900 text-slate-50">
              <div>Read More</div>
              <img
                loading="lazy"
                src={arrowrightup}
                className="shrink-0 my-auto aspect-square w-[12px]"
              />
            </button>
          </Link>
        </section>
      </div>

    </div>
  )
}

export default BlogCard

import React from 'react'
import { arrowrightup } from '../Global/Imports';
const BlogCard = ({title, img}) => {

  return (
    
    <div>
      <div className="bg-slate-600 text-white w-[427px] h-[567px] rounded-2xl">
        <section className='flex justify-center py-4'>
          <img src={img} alt="" className='w-[395px] h-[298px]' />
        </section>
        <section className=' w-[395px] flex flex-col p-4'>
          
          <span className='py-2'>June 01, 2024</span>

          <span className='text-[24px] font-semibold py-2'>{title}</span>
    
          <button className="flex gap-3 py-2 text-base font-semibold leading-6 text-slate-50">
            <div>Read More</div>
            <img
              loading="lazy"
              src={arrowrightup}
              className="shrink-0 my-auto aspect-square w-[12px]"
            />
          </button>
        </section>
      </div>

    </div>
  )
}

export default BlogCard

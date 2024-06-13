import React from 'react'
import Header from '../Components/Header';
import BlogCard from '../Components/BlogCard';
import { blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8 } from '../Global/Imports';
import Readyto from '../Components/Readyto';

const Blog = () => {
  const blogTitle = `Humanize Blog Central - Your AI Content Hub`;
  const blogText = `Dive into our blogs for the latest tips, strategies, and stories in AI-enhanced content creation. It's all about making your words count.`;
  return (
    <div className='mx-[70px]'>
      {/* Blog Header */}
      <div className="">
        <Header title={blogTitle} text={blogText} />
      </div>

      {/* blog card */}
      <div className="my-14 flex items-center justify-center flex-wrap gap-4">
        
        <BlogCard
          title={`Hemingway Editor & GPT-3: Improve Readability Score with ease`}
          img={blog1}
        />

        <BlogCard
          title={`Hemingway Editor & GPT-3: Improve Readability Score with ease`}
          img={blog2}
        />

        <BlogCard
          title={`Hemingway Editor & GPT-3: Improve Readability Score with ease`}
          img={blog3}
        />

        <BlogCard
          title={`Hemingway Editor & GPT-3: Improve Readability Score with ease`}
          img={blog4}
        />

        <BlogCard
          title={`Hemingway Editor & GPT-3: Improve Readability Score with ease`}
          img={blog5}
        />

        <BlogCard
          title={`Hemingway Editor & GPT-3: Improve Readability Score with ease`}
          img={blog6}
        />

        <BlogCard
          title={`Hemingway Editor & GPT-3: Improve Readability Score with ease`}
          img={blog7}
        />

        <BlogCard
          title={`Hemingway Editor & GPT-3: Improve Readability Score with ease`}
          img={blog8}
        />
      </div>

      {/* Ready to? */}
      <Readyto />
      
    </div>
  )
}

export default Blog

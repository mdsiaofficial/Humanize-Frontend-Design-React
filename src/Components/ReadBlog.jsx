import React from 'react'
import { left } from '../Global/Imports'
import { Link } from 'react-router-dom'
import Header from './Header'
import { blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8 } from '../Global/Imports';
import Blog from '../Pages/Blog';
import BlogCard from './BlogCard';
import Readyto from './Readyto';
const ReadBlog = ({ title, img }) => {
  title = `Hemingway Editor & GPT-4o: Improve Readability Score with ease`;
  img = blog1
  return (
    <div>
      {/* Read Full Blog */}
      <div className="mx-[18rem]">

        {/* back button */}
        <Link to={`/blog`}>
          <span>
            <button className='flex text-white items-center justify-center gap-2 '>
              <img src={left} alt="" />
              <p>Back</p>
            </button>
          </span>
        </Link>

        {/* title */}
        <div className="mt-5 text-white">
          <h1 className="text-6xl font-bold text-wrap">{title}</h1>
          <h1 className="text-xl font-bold text-wrap">July 04, 2024</h1>
        </div>

        {/* img */}
        <div className="">
          <img src={img} alt="" className='my-16 w-[1374px] h-[642px] ' />
        </div>


        {/* blog content */}
        <section className='text-white text-lg'>
          <section className='my-6'>
            <h1 className='text-white text-3xl font-bold'>Readability Score</h1>
            <p>In this blog we will look at How to Improve readability score using AISEO readability improver which combines hemmingway editor style with GPT-3.
              <br />
              If you are into writing content for your online business or as a freelancer, content readability is one of the most important aspects of content writing that you must adhere to.
              <br />
              A lot of writers put a lot of effort into covering the subject and taking care of SEO, which is not a bad thing. However, very few of them spend time making sure the content created is easily readable.
              <br />
              Writing articles to publish online is very different from writing a novel. You would need to appeal to the masses that belong to a wide spectrum of language competency.
              In fact, a major chunk of your target audience doesn't even have English as their first language, considering you write in English.
              <br />
              Your job as a content writer is to make sure you share your thoughts and knowledge with each one of them. So it is essential for you to improve readability score of any piece of content you want to publish online.</p>
          </section>

          <section className='my-6'>
            <h1 className='text-white text-3xl font-bold'>What is a Readability Score?</h1>
            <p>A readability score is a quantitative measure of the ease with which a text can be read. The score is based on factors such as the average word length and the number of syllables per word. A higher score means the text is easier to read, while a lower score means it is more difficult.

              There are several ways to calculate the readability of a piece of content. One of the most popular scales is the Flesch Reading Ease score. This score ranges from 0 (very difficult to read) to 100 (very easy to read). The higher the Flesch Reading Ease score, the more readable the text.</p>
          </section>

          <section className='my-6'>
            <h1 className='text-white text-3xl font-bold'>Why is Content Readability important?</h1>
            <p>Readability is important for two reasons - Audience Engagement and SEO.
              Audience engagement - The easier your content is to read and comprehend, the higher will be the chances that your audience will read them, engage with them, and share them. It goes without saying that the engagement will go down when the readability takes a dip.

              SEO - Readability is used as a metric by search engines to determine how easy a piece of content is to read. This is because readable content is easier to find and understand, which can lead to more clicks on relevant pages. Therefore, content with a higher readability score will tend to appear higher in the SERPs.</p>
          </section>

          <section className='my-6'>
            <h1 className='text-white text-3xl font-bold'>A bit of context</h1>
            <p>When someone visits your website, the first thing they notice is the design. If it's cluttered or hard to read, they'll leave almost immediately. A recent study found that 79% of people will leave a website if the text is too small or difficult to read. To keep visitors engaged, you need to improve your website's readability score.
              There are a few things you can do to make your website more readable. Let's go through them one by one.</p>
          </section>


          <section className='my-6'>
            <h1 className='text-white text-3xl font-bold'>How to Improve Readability Score?</h1>
            <p>The easiest way to improve the readability score is using AISEO’s powerful readability improver tool that uses proprietary algorithms to analyze text and highlight complex sentences and paragraphs that should be simplified to make the content more readable.

              In principle, it works similar to the popular Hemingway App . Except that there’s one important upgrade.

              AISEO Readability Improver can not only give suggestions, it can improve the readability of an article on its own with the help of machine learning and artificial intelligence. More on this in the later sections of this blog.

              Even though AISEO readability tool could automatically improve the readability of your content, understanding the basics of doing it manually would help you a lot when the tools fall short. No tool is perfect, so you need a fallback option.
              So, let's jump into it.</p>
          </section>
        </section>

        {/*Trending Blogs */}
        <div className="my-[10rem]  gap-4 flex flex-wrap">
          <BlogCard
            title={`Hemingway Editor & GPT-3: Improve Readability Score with ease`}
            img={blog1}
          />

          <BlogCard
            title={`Hemingway Editor & GPT-3: Improve Readability Score with ease`}
            img={blog2}
          />

        </div>

        {/* ready to join? */}
        <Readyto />
      </div>
    </div>
  )
}

export default ReadBlog

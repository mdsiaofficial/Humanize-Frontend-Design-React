import React from 'react'
import AiDetection from '../Components/AiDetection'
import BlogCard from '../Components/BlogCard'
import { blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8 } from '../Global/Imports';
import Bypass from '../Components/Bypass';
import BypassFeat from '../Components/BypassFeat';
import FAQ2 from '../Components/FAQ2';
import BypassSoln from '../Components/BypassSoln';
import FAQ from '../Components/FAQ';
import FAQ3 from '../Components/FAQ3';
import GotQuestions from '../Components/GotQuestions';
import CustomerFeedback from '../Components/CustomerFeedback';
import FlexiblePrice from '../Components/FlexiblePrice';
import PriceCard from '../Components/PriceCard';
import Header from '../Components/Header';

const Debugger = () => {
  const blogTitle = `Humanize Blog Central - Your AI Content Hub`;
  const blogText = `Dive into our blogs for the latest tips, strategies, and stories in AI-enhanced content creation. It's all about making your words count.`;
  return (
    <div>
      <h1>Debugger</h1>
      {/* <AiDetection/> */}
      {/* <BlogCard title={blogTitle} img={blog1}/> */}
      {/* <Bypass/> */}
      <FAQ/>
      {/* <FAQ2/> */}
      {/* <FAQ3/> */}
      {/* <BypassFeat/> */}
      {/* <BypassSoln/> */}

      {/* <GotQuestions/> */}
      {/* <CustomerFeedback/> */}
      {/* <FlexiblePrice/> */}
      {/* <PriceCard scheme="Basic"/> */}
      {/* <GotQuestions /> */}
      {/* <Header title={"Hello hello hello"} text={ "Hello Hello" }/> */}

    </div>
  )
}

export default Debugger

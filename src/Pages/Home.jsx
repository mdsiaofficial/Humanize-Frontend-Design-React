import React from 'react'
import HumanizeBox from '../Components/HumanizeBox'
import ProFeatures from '../Components/ProFeatures';
import { arrowright, bypassfeat, bypasssoln, check1, checkforai, howitworks } from '../Global/Imports';
import Bypass from '../Components/Bypass';
import HowItWorks from '../Components/HowItWorks';
import FAQ from '../Components/FAQ';
import AiDetection from '../Components/AiDetection';
import { Switch } from '@mui/material';
import BypassSoln from '../Components/BypassSoln';
import BypassFeat from '../Components/BypassFeat';
import FAQ2 from '../Components/FAQ2';
import FAQ3 from '../Components/FAQ3';
import FlexiblePrice from '../Components/FlexiblePrice';
import CustomerFeedback from '../Components/CustomerFeedback';
import GotQuestions from '../Components/GotQuestions';
import Readyto from '../Components/Readyto';
import Header
  from '../Components/Header';
const Home = () => {
  const priceHeader = `Flexible pricing for every need`;
  const priceText = `Simple, transparent pricing that grows with you. Try any plan free for 30 days. Save 20% with annual.`;


  return (
    <>
      <div className="flex flex-col items-center lg:pt-10 bg-slate-900">
        <header className="flex flex-col items-center lg:pt-10 bg-slate-900">


          {/* heading */}
          <div className="lg:mt-18 text-2xl lg:text-6xl font-semibold tracking-tighter text-center text-white leading-[65px] lg:w-[860px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            <span className="lg:font-medium">Transform AI writing into natural  human text with </span>
            <span className="font-medium text-violet-400">humanize!</span>
          </div>
          <div className="mt-3 lg:mt-6 text-lg font-medium leading-7 text-center text-slate-200 max-md:max-w-full">
            Advanced AI humanization to bypass AI detection effortlessly.
          </div>

        </header>

        {/* humanize box */}
        <HumanizeBox />

      </div>

      {/* Bypass all part */}
      <Bypass />

      {/* How it Works end */}
      <HowItWorks />
      {/* How it Works end */}

      {/* Pro Features */}
      <ProFeatures />


      <div className="flex flex-col justify-center items-center self-stretch mx-auto mt-12 w-[90%] max-md:px-5 max-md:mt-10 max-md:max-w-full">

        {/* AI Detection */}
        <AiDetection />
        {/* AI Detection */}


        {/* FAQ */}
        <FAQ />
        {/* FAQ */}

        {/* Bypass Soln */}
        <BypassSoln />
        {/* Bypass Soln */}


        {/* FAQ2 */}
        <FAQ2 />
        {/* FAQ2 */}

        {/* Bypass Feature */}
        <BypassFeat />
        {/* Bypass Feature */}

        {/* FAQ3 */}
        <FAQ3 />
        {/* FAQ3 */}

        {/* header */}
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <Header title={priceHeader} text={priceText} />
        </div>
        {/* Flexible */}
        <FlexiblePrice />
        {/* Flexible */}


      </div>

      {/* customer feedback */}
      <CustomerFeedback />

      {/* Got questions? */}
      <GotQuestions />

      {/* Readyto */}
      <Readyto />


    </>
  );
}
export default Home

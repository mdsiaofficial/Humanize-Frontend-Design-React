import { ar1, logo, logo2, arrowright, bypassfeat, bypasssoln, check1, check2, checkcircleicon, checkforai, content, ellipse, flag, framein, frameout, gram1, howitworks, msg, path, plus, rectangle, score, spark1, stars5, upload, vector, web, write1 } from '../Global/Imports.jsx';
import React from 'react'
import Detectors from './Detectors.jsx';

const Bypass = () => {
  return (
    <div>
      {/* Bypass all part */}
      <div className="self-center mt-40 text-4xl font-medium tracking-tight text-center leading-[55.08px] text-slate-50 max-md:mt-10 max-md:max-w-full">
        Bypass all popular ai detectors
      </div>
      <div className="flex justify-center gap-3 px-5 mt-10 text-base font-medium leading-6 whitespace-nowrap text-slate-50 max-md:flex-wrap">
        
        <Detectors title={"OpenAI"}/>
        <Detectors title={"GPTZero"}/>
        <Detectors title={"CrossPlag"}/>
        <Detectors title={"Turnitin"}/>
        <Detectors title={"ZeroGPT"}/>
        <Detectors title={"ContentAtScale"}/>
        <Detectors title={"CopyLeaks"}/>
        <Detectors title={"Sapling"}/>
        
      </div>
      {/* bypass end */ }
    </div >
  )
}

export default Bypass

import React from 'react'
import { ar1, logo, logo2, arrowright, bypassfeat, bypasssoln, check1, check2, checkcircleicon, checkforai, content, ellipse, flag, framein, frameout, gram1, howitworks, msg, path, plus, rectangle, score, spark1, stars5, upload, vector, web, write1 } from '../Global/Imports.jsx';
const Detectors = ({title}) => {
  return (
    <div>
      <div className="flex gap-2 justify-center px-6 py-3 border-2 border-solid bg-slate-900 border-slate-500 rounded-[50px] max-md:px-5">
          <img
            loading="lazy"
            src={check1}
            className="shrink-0 self-start w-6 aspect-square"
          />
        <div>{title}</div>
        </div>
    </div>
  )
}

export default Detectors

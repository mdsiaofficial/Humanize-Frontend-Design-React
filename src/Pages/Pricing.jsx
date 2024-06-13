import React from 'react'
import Header from '../Components/Header'
import FlexiblePrice from '../Components/FlexiblePrice'
import GotQuestions from '../Components/GotQuestions';
const Pricing = () => {
  const title = `Flexible pricing for every need`;
  const text = `Simple, transparent pricing that grows with you. Try any plan free for 30 days. Save 20% with annual.`;
  return (
    <div>
      {/* header */}
      <div className="">
        <Header title={title} text={text} />
      </div>

      {/* Pricing Plan */}
      <section className="flex items-center justify-center">
        <FlexiblePrice />
      </section>

      {/* Got Questions? */}
      <GotQuestions />
    </div>
  )
}

export default Pricing

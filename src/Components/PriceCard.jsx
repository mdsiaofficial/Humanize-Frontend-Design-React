import React from 'react'
import { Switch } from '@mui/material';
import { checkcircleicon } from '../Global/Imports';
import Header from './Header';

const PriceCard = ({ scheme }) => {
  // scheme = `Premium`;
  const plans = {
    "Basic": {
      price: `$9.99 /Month`,
      scheme: `Basic`,
      Mo: `/Month`,
      Yr: `/Year`,
      save: `Save 10%`,
      Feature: [
        "20,000 words/month",
        "Basic Humanization Features",
        "Language Support: 2 languages",
        "Email Support",
        "Access to Standard Engine",
        "Basic AI Detector Evasion",
      ]
    },
    "Standard": {
      price: `$29.99 /Month`,
      scheme: `Standard`,
      Mo: `/Month`,
      Yr: `/Year`,
      save: `Save 20%`,
      Feature: [
        "100,000 words/month",
        "Advanced Humanization Features",
        "Language Support: 5 languages",
        "Priority Email Support",
        "Access to Advanced Engine",
        "Improved AI Detector Evasion",
        "Content Style Diversity Options",
      ]
    },
    "Premium": {
      price: `$59.99 /Month`,
      scheme: `Premium`,
      Mo: `/Month`,
      Yr: `/Year`,
      save: `Save 40%`,
      Feature: [
        "300,000 words/month",
        "All Advanced Features",
        "Unlimited Language Support",
        "Priority Phone and Email Support",
        "Access to Premium Engine",
        "Advanced AI Detector",
        "Real-Time Human Score Analysis",
        "Dedicated Account Manager",
      ]
    }
  };
  let plan = plans[scheme];

  return (
    <div>
      <div className="flex flex-col max-md:ml-0 max-md:w-full lg:h-[740.16px]">
        <div className="flex flex-col grow px-6 lg:pt-5 pb-11 mx-auto w-full rounded-2xl border-2 border-solid border-slate-500 text-slate-100 max-md:px-5 max-md:mt-4">
          <div className="text-lg font-medium tracking-tight leading-[55.08px] text-slate-200">
            {plan.scheme}
          </div>
          <div className="flex gap-1 mt-4 whitespace-nowrap text-slate-50">
            <div className="grow text-4xl font-semibold tracking-tight leading-[55.08px]">
              {plan.price}
            </div>

          </div>
          {
            plan.Feature.map((item, index) => (
              <div key={index} className="flex gap-2 mt-8 text-base font-medium leading-6 max-md:mt-4">
                <img
                  loading="lazy"
                  src={checkcircleicon}
                  className="shrink-0 w-6 h-6 aspect-square"
                />
                <div className="flex-auto my-auto">
                  {item}
                </div>
              </div>
            ))
          }
          <div className="flex justify-center mt-6 lg:mt-auto ">
            <div className="justify-center items-center text-center px-6 py-4 text-base font-semibold leading-6 text-white bg-violet-600 rounded border border-violet-300 border-solid max-md:px-5">
              Start {plan.scheme} Plan
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceCard

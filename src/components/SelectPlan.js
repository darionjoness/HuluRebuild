import React from 'react'
import BasePlan from './BasePlan'
import BundlePlan from './BundlePlan'
import { useState } from 'react'

const SelectPlan = ({ switchBox, switchBox2, showBundle }) => {

  return (
    <div className='selectPlan'>
        <div className="selectPlanItems container">
            <div className="selectPlanHeader">
                <h1>Select Your Plan</h1>
                <p>No hidden fees, equipment rentals, or installation appointments.</p>
                <strong>Switch plans or cancel anytime.**</strong>
            </div>
            <BasePlan switchBox={switchBox} showBundle={showBundle} />
            <BundlePlan switchBox2={switchBox2} showBundle={showBundle} />
        </div>
    </div>
  )
}

export default SelectPlan
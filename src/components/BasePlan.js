import React from 'react'
import HuluLogo from './img/hulu-logo.svg'
import threeLogos from './img/3Logos.png'
import { AiOutlineCheck } from "react-icons/ai";
import { useState, useEffect } from 'react';

const BasePlan = ({ showBundle, switchBox }) => {

  return (
    <div className={`basePlan ${showBundle === 1 ? 'showBundle' : 'noShowBundle'}`}>
        <div className="basePlanItems">
            <table>
                <thead>
                    <tr className='switchPlansRow'>
                        <th className='switchPlans'>
                            <div className="singleLogo">
                                <p>Base Plans</p>
                                <img src={HuluLogo} alt="" />
                            </div>
                            <label onClick={switchBox} className="switch">
                                <input type="checkbox" />
                                <span className='slider round'></span>
                            </label>
                            <div className="baseTripleLogo">
                                <p>Bundle / Save</p>
                                <img src={threeLogos} alt="" />
                            </div>
                        </th>
                        <th className='huluWithAds'>
                            <span>Most Popular</span>
                            <p className='freeTrial'>30 Day Free Trial</p>
                            <p className='withAds'>Hulu (With Ads)</p>
                            <button>$7.99 / Month</button>
                        </th>
                        <th className='huluNoAds'>
                            <p className='freeTrial'>30 Day Free Trial</p>
                            <p className='noAds'>Hulu (No Ads)</p>
                            <button>$14.99 / Month</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='basePlanTableTitle'>Monthly price</td>
                        <td>$7.99/mo.</td>
                        <td>$14.99/mo.</td>
                    </tr>
                    <tr>
                        <td className='basePlanTableTitle'>Streaming Library with tons of TV episodes and movies</td>
                        <td><AiOutlineCheck className='check' /></td>
                        <td><AiOutlineCheck className='check' /></td>
                    </tr>
                    <tr>
                        <td className='basePlanTableTitle'>Most new episodes the day after they air</td>
                        <td><AiOutlineCheck className='check' /></td>
                        <td><AiOutlineCheck className='check' /></td>
                    </tr>
                    <tr>
                        <td className='basePlanTableTitle'>Access to award-winning Hulu Originals</td>
                        <td><AiOutlineCheck className='check' /></td>
                        <td><AiOutlineCheck className='check' /></td>
                    </tr>
                    <tr>
                        <td className='basePlanTableTitle'>Watch on your favorite devices, including TV, laptop, phone, or tablet</td>
                        <td><AiOutlineCheck className='check' /></td>
                        <td><AiOutlineCheck className='check' /></td>
                    </tr>
                    <tr>
                        <td className='basePlanTableTitle'>Up to 6 user profiles</td>
                        <td><AiOutlineCheck className='check' /></td>
                        <td><AiOutlineCheck className='check' /></td>
                    </tr>
                    <tr>
                        <td className='basePlanTableTitle'>Watch on 2 different screens at the same time</td>
                        <td><AiOutlineCheck className='check' /></td>
                        <td><AiOutlineCheck className='check' /></td>
                    </tr>
                    <tr>
                        <td className='basePlanTableTitle'>No ads in streaming library</td>
                        <td><div className='dashLine'></div></td>
                        <td><AiOutlineCheck className='check' /></td>
                    </tr>
                    <tr>
                        <td className='basePlanTableTitle'>Download and watch</td>
                        <td><div className='dashLine'></div></td>
                        <td><AiOutlineCheck className='check' /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="basePlanBottomMessage">
            <p>For current-season shows in streaming library only</p>
            <p>**Switches from Live TV to Hulu take effect as of the next billing cycle</p>
        </div>
    </div>
  )
}





export default BasePlan
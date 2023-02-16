import React from 'react'
import huluLogo from './img/hulu-logo.svg'
import threeLogos from './img/3Logos.png'
import { AiOutlineCheck } from "react-icons/ai";

const BundlePlan = ({ showBundle, switchBox2 }) => {
  return (
    <div className={`bundlePlan ${showBundle === 2 ? 'showBundle' : 'noShowBundle'}`}>
        <div className="bundlePlanItems">
            <table>
                <tr className='headRow'>
                    <th className='tripleLogo'>
                        <div className="basePlans">
                            <p>Base Plans</p>
                            <img src={huluLogo} alt="" />
                        </div>
                        <label onClick={switchBox2} className="switch">
                            <input type="checkbox" />
                            <span className='slider2 round'></span>
                        </label>
                        <div className="bundleSave">
                            <p>Bundle / Save</p>
                            <img src={threeLogos} alt="" />
                        </div>
                    </th>
                    <th className='trioBasic'>
                        <img src={threeLogos} alt="" />
                        <p>Disney Bundle</p>
                        <p>Trio Basic</p>
                        <button>$12.99 / Month</button>
                    </th>
                    <th className='trioPremium'>
                        <img src={threeLogos} alt="" />
                        <p>Disney Bundle</p>
                        <p>Trio Premium</p>
                        <button>$19.99 / Month</button>
                    </th>
                    <th className='huluLiveTv'>
                        <img src={threeLogos} alt="" />
                        <p>a</p>
                        <p>Hulu + Live TV</p>
                        <button>$69.99 / Month</button>
                    </th>
                </tr>
                <tr>
                    <td className='tableTitle'>Monthly price. Save up to $15.98/mo.*</td>
                    <td>$12.99/mo.*</td>
                    <td>$19.99/mo.</td>
                    <td>$69.99/mo.</td>
                </tr>
                <tr>
                    <td className='tableTitle'>Subscriptions included in each plan</td>
                    <td>Disney+, Hulu, and ESPN+, all with ads</td>
                    <td>Disney+ (No Ads), Hulu (No Ads),
                        ESPN+ (With Ads)
                    </td>
                    <td>Hulu + Live TV, Disney+, and ESPN+, all with ads</td>
                </tr>
                <tr>
                    <td className='tableTitle'>Hulu Streaming library with tons of episodes and movies</td>
                    <td><AiOutlineCheck className='check' /></td>
                    <td><AiOutlineCheck className='check' /></td>
                    <td><AiOutlineCheck className='check' /></td>
                </tr>
                <tr>
                    <td className='tableTitle'>Most new episodes the day after they air</td>
                    <td><AiOutlineCheck className='check' /></td>
                    <td><AiOutlineCheck className='check' /></td>
                    <td><AiOutlineCheck className='check' /></td>
                </tr>
                <tr>
                    <td className='tableTitle'>Access to award-winning Hulu Originals</td>
                    <td><AiOutlineCheck className='check' /></td>
                    <td><AiOutlineCheck className='check' /></td>
                    <td><AiOutlineCheck className='check' /></td>
                </tr>
                <tr>
                    <td className='tableTitle'>Watch on your favorite devices, including TV, laptop, phone, or tablet</td>
                    <td><AiOutlineCheck className='check' /></td>
                    <td><AiOutlineCheck className='check' /></td>
                    <td><AiOutlineCheck className='check' /></td>
                </tr>
                <tr>
                    <td className='tableTitle'>Download and watch on Hulu</td>
                    <td><div className='dashLine'></div></td>
                    <td><AiOutlineCheck className='check' /></td>
                    <td><div className='dashLine'></div></td>
                </tr>
                <tr>
                    <td className='tableTitle'>Live TV with 85+ top channels. No cable required.</td>
                    <td><div className='dashLine'></div></td>
                    <td><div className='dashLine'></div></td>
                    <td><AiOutlineCheck className='check' /></td>
                </tr>
                <tr>
                    <td className='tableTitle'>Live TV guide to navigate channels</td>
                    <td><div className="dashLine"></div></td>
                    <td><div className="dashLine"></div></td>
                    <td><AiOutlineCheck className='check' /></td>
                </tr>
                <tr>
                    <td className='tableTitle'>Record Live TV with Unlimited DVR</td>
                    <td><div className="dashLine"></div></td>
                    <td><div className="dashLine"></div></td>
                    <td><AiOutlineCheck className='check' /></td>
                </tr>
            </table>
            <div className="bundlePlanBottomMessage">
                <p>*Savings compared to regular monthly price of each service. <a href="">Terms apply</a></p>
                <p>**Switches from Live TV to Hulu take effect as of the next billing cycle</p>
                <p>For current-season shows in the streaming libray only</p>
            </div>
        </div>
    </div>
  )
}

export default BundlePlan
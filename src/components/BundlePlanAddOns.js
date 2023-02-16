import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const BundlePlanAddOns = ({ showBundle, showAddOns, changeShowAddOns }) => {
  return (
    <div className={`bundlePlanAddOns ${showBundle === 2 ? '' : 'hide'}`}>
        <div className={`bundlePlanAddOnsItems container ${showAddOns ? 'showAddOns' : 'hideAddOns'}`}>
            <div className="bundlePlanAddOnsHeaderText">
                <h1>Available Add-ons</h1>
                <p>Add-ons available at an additional cost.</p>
                <p>Add them up after you sign up for Hulu.</p>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>HBO Max™</td>
                        <td><div className="check"><AiOutlineCheck /></div></td>
                        <td><div className="check"><AiOutlineCheck /></div></td>
                        <td><div className="check"><AiOutlineCheck /></div></td>
                    </tr>
                    <tr>
                        <td>CINEMAX®</td>
                        <td><div className="check"><AiOutlineCheck /></div></td>
                        <td><div className="check"><AiOutlineCheck /></div></td>
                        <td><div className="check"><AiOutlineCheck /></div></td>
                    </tr>
                    <tr>
                        <td>SHOWTIME®</td>
                        <td><div className="check"><AiOutlineCheck /></div></td>
                        <td><div className="check"><AiOutlineCheck /></div></td>
                        <td><div className="check"><AiOutlineCheck /></div></td>
                    </tr>
                    <tr>
                        <td>STARZ®</td>
                        <td><div className="check"><AiOutlineCheck /></div></td>
                        <td><div className="check"><AiOutlineCheck /></div></td>
                        <td><div className="check"><AiOutlineCheck /></div></td>
                    </tr>
                    <tr>
                        <td>Unlimited Screens</td>
                        <td><div className="dashLine"></div></td>
                        <td><div className="dashLine"></div></td>
                        <td><div className="check"><AiOutlineCheck /></div></td>
                    </tr>
                    <tr>
                        <td>Entertainment Add-on</td>
                        <td><div className="dashLine"></div></td>
                        <td><div className="dashLine"></div></td>
                        <td><div className="check"><AiOutlineCheck /></div></td>
                    </tr>
                    <tr>
                        <td>Espanol Add-on</td>
                        <td><div className="dashLine"></div></td>
                        <td><div className="dashLine"></div></td>
                        <td><div className="check"><AiOutlineCheck /></div></td>
                    </tr>
                    <tr>
                        <td>Sports Add-on</td>
                        <td><div className="dashLine"></div></td>
                        <td><div className="dashLine"></div></td>
                        <td><div className="check"><AiOutlineCheck /></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
            <div onClick={changeShowAddOns} className="baseAddOnsBtn bundleAddOnsBtn">
                {showAddOns ? <button>Hide Add-ons <FiChevronUp className='baseAddOnsChevron' /></button> : <button>Show Add-ons <FiChevronDown className='baseAddOnsChevron' /></button>}
            </div>
    </div>
  )
}

export default BundlePlanAddOns
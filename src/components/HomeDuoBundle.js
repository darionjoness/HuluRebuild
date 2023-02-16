import React from 'react'
import twoLogos from './img/2Logos.png'
import Button from './Button'

const HomeDuoBundle = () => {
  return (
    <div className='homeDuoBundle'>
        <div className="homeDuoBundleItems container">
            <img src={twoLogos} alt="" />
            <div className="duoBundleInfo">
                <p>Disney Bundle Duo Basic</p>
                <h2>Get Hulu & Disney+, both with ads, for $9.99/mo.</h2>
            </div>
            <div className="duoBundleBtnDiv">
                <Button classText={'duoBundleBtn'} text={'Get Them Both'} />
                <a href="">Terms apply</a>
            </div>
        </div>
    </div>
  )
}

export default HomeDuoBundle
import React from 'react'
import threeLogos from './img/3Logos.png'
import Button from './Button'

const HomeTrioBundle = () => {
  return (
    <div className='homeTrioBundle'>
        <div className="homeTrioBundleItems">
            <p>Disney Bundle Trio Basic</p>
            <img src={threeLogos} alt="" />
            <h2>Get Hulu, Disney+, and ESPN+, all with ads, for $12.99/month.</h2>
            <Button classText={'homeTrioBtn'} text={'Get All Three'} />
            <a className='terms' href="">Terms apply</a>
            <a className='signUp' href="">Sign up for Hulu only</a>
        </div>
    </div>
  )
}

export default HomeTrioBundle
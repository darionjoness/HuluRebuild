import React from 'react'
import HomeTrioBundle from './HomeTrioBundle'
import HomeDuoBundle from './HomeDuoBundle'
import huluLogo from './img/hulu-logo.svg'


const Home = () => {
  return (
    <div className='home'>
        <div className="homeTop">
            <img src={huluLogo} alt="" />
            <a className='login' href="">Log in</a>
        </div>
        <HomeTrioBundle />
        <HomeDuoBundle />
    </div>
  )
}

export default Home
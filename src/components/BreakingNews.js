import React from 'react'
import abcNewsSmall from './img/cbsNewsSmall.png'
import cnnSmall from './img/cnnNews.svg'
import msnbc from './img/msnbc.png'
import foxNewsSmall from './img/foxNewsSmall.svg'

const BreakingNews = ({ showCurrentEvent }) => {
  return (
    <div id='breakingNews' className={showCurrentEvent === 2 ? 'showTab' : 'hideTab'}>
        <div className="breakingNewsItems">
            <div className="breakingNewsText">
                <h1>Breaking News</h1>
                <p>Keep pace with what's going on locally and gloablly with trusted opinions from all the top news networks.</p>
            </div>
            <div className="breakingNewsChannels">
                <div className="breakingNewsChannel">
                    <img src={abcNewsSmall} alt="" />
                </div>
                <div className="breakingNewsChannel">
                    <img src={cnnSmall} alt="" />
                </div>
                <div className="breakingNewsChannel">
                    <img src={msnbc} alt="" />
                </div>
                <div className="breakingNewsChannel">
                    <img src={foxNewsSmall} alt="" />
                </div>
            </div>
            <p className='smallMessage'>Live TV plan required. Regional restrictions, blackouts and additional terms apply. <a href="">See details</a></p>
        </div>
    </div>
  )
}

export default BreakingNews
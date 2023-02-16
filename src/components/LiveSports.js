import React from 'react'
import cbsSmall from './img/cbsSmall.png'
import espnSmall from './img/espnSmall.png'
import foxSportsSmall from './img/foxSportsSmall.svg'
import nflNetworkSmall from './img/nflNetworkSmall.png'

const LiveSports = ({ showCurrentEvent }) => {
  return (
    <div id='liveSports' className={showCurrentEvent === 1 ? 'showTab' : 'hideTab' }>
        <div className="liveSportsItems">
            <div className="liveSportsText">
                <h1>Live Sports</h1>
                <p>Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA, NBA, NHL, NFL, and more.</p>
            </div>
            <div className="liveSportsChannels">
                <div className="liveSportsChannel">
                    <img src={cbsSmall} alt="" />
                </div>
                <div className="liveSportsChannel">
                    <img src={espnSmall} alt="" />
                </div>
                <div className="liveSportsChannel">
                    <img src={foxSportsSmall} alt="" />
                </div>
                <div className="liveSportsChannel">
                    <img src={nflNetworkSmall} alt="" />
                </div>
            </div>
            <p className='liveSportsSmallMessage'>Live TV plan required. Regional restrictions, blackouts and additional terms apply. <a href="">See details</a></p>
        </div>
    </div>
  )
}

export default LiveSports
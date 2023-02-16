import React from 'react'
import biggestEventsFirstSmall from './img/biggestEventsFirstSmall.png'
import goldenGlobeSmall from './img/goldenGlobeSmall.png'
import grammySmall from './img/grammySmall.png'
import oscarsSmall from './img/oscarsSmall.png'

const BiggestEvents = ({ showCurrentEvent }) => {
  return (
    <div id="biggestEvents" className={showCurrentEvent === 3 ? 'showTab' : 'hideTab'}>
        <div className="biggestEventsItems">
            <div className="biggestEventsText">
                <h1>Biggest Events</h1>
                <p>Spectacular, can't-miss moments like the Olympics, Grammys, Oscars, Emmys, and more.</p>
            </div>
            <div className="biggestEventsChannels">
                <div className="biggestEventsChannel">
                    <img src={biggestEventsFirstSmall} alt="" />
                </div>
                <div className="biggestEventsChannel">
                    <img src={goldenGlobeSmall} alt="" />
                </div>
                <div className="biggestEventsChannel">
                    <img src={grammySmall} alt="" />
                </div>
                <div className="biggestEventsChannel">
                    <img src={oscarsSmall} alt="" />
                </div>
            </div>
            <p className='smallMessage'>Live TV plan required. Regional restrictions, blackouts and additional terms apply. <a href="">See details</a></p>
        </div>
    </div>
  )
}

export default BiggestEvents
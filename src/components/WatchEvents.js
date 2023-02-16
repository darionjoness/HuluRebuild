import React from 'react'
import { useState } from 'react'
import LiveSports from './LiveSports'
import BreakingNews from './BreakingNews'
import BiggestEvents from './BiggestEvents'
import liveSportsBg from './img/liveSportsImg.jpeg'
import breakingNewsBg from './img/breakingNews.jpeg'
import biggestEventsBg from './img/biggestEvents.jpeg'

const WatchEvents = () => {
    const [showCurrentEvent, setShowCurrentEvent] = useState(1)
   
    const viewLiveSports = () => {
      setShowCurrentEvent(1)
    }

    const viewBreakingNews = () => {
      setShowCurrentEvent(2)
    }

    const viewBiggestEvents = () => {
      setShowCurrentEvent(3)
    }

    

  return (
    <div className={showCurrentEvent === 1 ? 'showLiveSportsBg' : showCurrentEvent === 2 ? 'showBreakingNewsBg' : showCurrentEvent === 3 ? 'showBiggestEventBg' : ''} id='watchEvents'>
        <div className="watchEventsItems container">
            <div className="watchEventsBtns">
                <button onClick={viewLiveSports} className={showCurrentEvent === 1 ? 'active' : 'notActive' }>Live Sports</button>
                <button onClick={viewBreakingNews} className={showCurrentEvent === 2 ? 'active' : 'notActive'}>Breaking News</button>
                <button onClick={viewBiggestEvents} className={showCurrentEvent === 3 ? 'active' : 'notActive'}>Biggest Events</button>
            </div>
            <LiveSports showCurrentEvent={showCurrentEvent} />
            <BreakingNews showCurrentEvent={showCurrentEvent} />
            <BiggestEvents showCurrentEvent={showCurrentEvent} />
        </div>
    </div>
  )
}

export default WatchEvents
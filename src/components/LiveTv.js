import React from 'react'
import { BsChevronDown } from "react-icons/bs";
import { MdArrowRightAlt } from "react-icons/md";

const LiveTv = () => {
  return (
    <div className='liveTv'>
        <div className="liveTvItems">
            <p className='textGreen'>
                Hulu(With Ads) + Live Tv, Now With Disney+ (with ads) And Espn+ (with ads)
            </p>
            <h1>Live TV Makes It Better</h1>
            <p className='liveTvInfo'>Make the switch from cable. Get 85+ top channels on Hulu (With Ads) + Live TV with your favorite live sports, news, and events - plus the entire Hulu streaming library. With Unlimited DVR, store Live TV recordings for up to nine months and fast-forward through your DVR content. Access endless entertainment with Disney+ and live sports with ESPN+.</p>
            <p className='restrictions'>Regional restrictions, blackouts and Live TV terms apply. Access content from each service separately. Location data required to watch certain content. Unlimited DVR recording is not available for on-demand shows.</p>
            <a className='viewChannels' href="">View Channels In Your Area<MdArrowRightAlt className='rightArrow' /></a>
            <a className='chevronDown' href=""><BsChevronDown /></a>
        </div>
    </div>
  )
}

export default LiveTv
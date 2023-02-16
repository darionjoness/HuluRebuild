import React from 'react'

const IncludedPlans = () => {
  return (
    <div className='includedPlans'>
        <div className="includedPlansItems container">
            <div className="includedPlansText">
                <p className='textGreen'>Included in all plans</p>
                <h1>All The TV You Love</h1>
                <p className='includedPlansDesc'>Watch full seasons of exclusively streaming series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.</p>
            </div>
            <div className="includedPlansMovies">
                <div className="bobsBurgers">
                    <p>Past & Current Seasons</p>
                    <h3>TV Shows</h3>
                </div>
                <div className="prey">
                    <p>New & Classic</p>
                    <h3>Movies</h3>
                </div>
                <div className="theHandmaidsTale">
                    <p>Groundbreaking</p>
                    <h3>Hulu Originals</h3>
                </div>
                <div className="houseOfTheDragon">
                    <p>Add-on</p>
                    <h3>Premiums</h3>
                    <p className='networkAddOns'>Premium network add-ons available for an additional cost</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IncludedPlans
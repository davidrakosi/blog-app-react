import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className='banner shade'>
            <div className="banner__profileImg" />
            <div className="banner__textContainer">
                <div className="banner__nameContainer">David Rakosi</div>
                <div className="banner__greeting">Welcome to my Blog</div>
            </div>
        </div>
    )
}

export default Banner

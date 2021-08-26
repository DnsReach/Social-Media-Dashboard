import React from 'react'

import Facebookview from './facebook-overview-1'
import Facebookview2 from './facebook-overview-2'
import Instagranview from './instagran-overview-1'
import Instagranview2 from './instagran-overview-2'
import Twitterview from './twitter-overview';
import Twitterview2 from './twitter-overview2';
import Youtubeoverview from './youtube-overview'
import Youtubeoverview2 from './youtube-overview2'

import './overview-css/view.css'

const Overview = () => {
    return (
        <>
            <footer id="grid-overview">
                <div id="grid-1">
                    <Facebookview />
                </div>
                <div id="grid-2">
                    <Facebookview2 />
                </div>
                <div id="grid-3">
                    <Instagranview />
                </div>
                <div id="grid-4">
                    <Instagranview2 />
                </div>
                <div id="grid-5">
                    <Twitterview />
                </div>
                <div id="grid-6">
                    <Twitterview2 />
                </div>
                <div id="grid-7">
                    <Youtubeoverview />
                </div>
                <div id="grid-8">
                    <Youtubeoverview2 />
                </div>
            </footer>
        </>
    )
}

export default Overview
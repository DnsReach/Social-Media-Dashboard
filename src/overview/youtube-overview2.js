import React from 'react'
import ImageYoutube2 from '../component/images/youtube-icon-logo-by-Vexels.png'

import './overview-css/yt2.css'

const youtubeoverview2 = () => {
    return (
        <div>
            <label
                id="label-overview"
                style={{ fontSize: 20 }}>
                Total Views
            </label>
            <img id="imagem-yt-2" src={ImageYoutube2} />
            <h1 className="text-view-yt-2">
                1407
            </h1>
        </div>
    )
}

export default youtubeoverview2
import React from 'react'
import ImageYoutuber from '../component/images/youtube-icon-logo-by-Vexels.png'
import './overview-css/yt.css'

const youtubeoverview = () => {
    return (
        <div>
            <label
                id="label-overview"
                style={{ fontSize: 20 }}>
                Likes
            </label>
            <img id="imagem-yt" src={ImageYoutuber} />
            <h1 className="text-view-yt">
                107
            </h1>
        </div>
    )
}

export default youtubeoverview

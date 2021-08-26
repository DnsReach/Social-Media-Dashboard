import React from 'react'
import ImageInsta2 from '../component/images/instagran.png'

import './overview-css/insta2.css'

const instagranoverview2 = () => {
    return (
        <div>
            <div>
                <label
                    id="label-overview"
                    style={{ fontSize: 20 }}>
                    Like
                </label>
                <img id="imagem-insta2" src={ImageInsta2} />
                <h1 className="text-view-insta2">
                    52K
                </h1>
            </div>
        </div>
    )
}

export default instagranoverview2

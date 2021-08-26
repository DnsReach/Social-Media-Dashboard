import React from 'react'
import Image from '../component/images/pngwing.com.png'
import './overview-css/face2.css'

function facebookoverview2() {
    return (
        <div>
            <div>
                <label
                    id="label-overview"
                    style={{ fontSize: 20 }}>
                    Likes
                </label>
                <img id="imagem-facebook-2" src={Image} />
                <h1 className="text-views-2">
                    52
                </h1>
            </div>
        </div>
    )
}

export default facebookoverview2

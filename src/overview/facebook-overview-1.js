import React from 'react'
import Image from '../component/images/pngwing.com.png'

import './overview-css/face1.css'

const facebookoverview1 = () => {
    return (
        <div>
            <label
                id="label-overview"
                style={{ fontSize: 20 }}>
                Page Views
            </label>
            <img id="imagem-facebook" src={Image} />
            <h1 className="text-views">
                87
            </h1>
        </div>
    )
}

export default facebookoverview1
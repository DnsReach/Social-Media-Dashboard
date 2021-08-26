import React from 'react'
import Youtube from './youtube'
import Insta from './instagran'
import Twitter from './twitter'

import './media-css/style.css'
import './media-css/facebook.css'

import Image from '../images/pngwing.com.png'

const components = (ev) => {
    return (
        <section id="grid-section">

            <menu id="menu-grid-1">
                <div>
                    <img src={Image} id="image" />
                    <label id="label">@Dnsreach</label>
                </div>
                <div className="text-followers-sub">
                    <h1>1987</h1>
                    <p style={{ fontSize: 16 }}>
                        <strong>FOLLOWERS</strong>
                    </p>
                </div>
            </menu>

            <menu id="menu-grid-2">
                <Twitter />
            </menu>

            <menu id="menu-grid-3">
                <Insta />
            </menu>

            <menu id="menu-grid-4">
                <Youtube />
            </menu>

        </section>
    )
}

export default components

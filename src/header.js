import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Component from './component/general-media/components'
import Overview from './overview/overview'

import './css/setup.css'

const Global = createGlobalStyle`
body{
    background-color: ${props => props.theme.mode == "dark" ? 'black' : 'wheat'};
    color: ${props => props.theme.mode == "dark" ? "white" : "black"};}`

const Header = (er) => {
    const [state, setState] = useState({})
    return (
        <>
            <ThemeProvider theme={state}>
                <Global />
                <header className="header-menu">
                    <div id="text-social-media-div">
                        <h1 style={{ textAlign: "left" }}>Social Media Dashboard</h1>
                        <p style={{ textAlign: "left" }}>Total followers: 23,004</p>
                    </div>
                    <div className="switch-checkbox">
                        <label className="darkmode-label">
                            Dark Mode
                        </label>
                        <label className="switch">
                            <input id="input" type="checkbox" onChange={
                                () => {
                                    setState(
                                        state.mode == "dark" ? { mode: "light" } :
                                            { mode: "dark" }
                                    )
                                }
                            } />
                            <span className="slider round"> </span>
                        </label>
                    </div>
                </header>
                <Component />
                <h1>
                    Overview - Today
                </h1>
                <Overview />
            </ThemeProvider>
        </>
    );
}

export default Header
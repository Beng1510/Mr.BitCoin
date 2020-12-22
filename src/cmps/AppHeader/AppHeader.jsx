import './AppHeader.scss'

import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import logo from '../../assets/img/logo.svg'
import homeImg from '../../assets/img/home.svg'
import contactImg from '../../assets/img/contact.svg'
import statsImg from '../../assets/img/stats.svg'
import signupImg from '../../assets/img/signup.svg'
import './AppHeader.scss'

class _AppHeader extends Component {

    render() {
        return (
            <>
                <nav className="app-header flex space-between" >
                    <div className='logo-container flex align-center '>
                        <img src={logo} />
                        <h2>Mr. BitCoin</h2>
                    </div>
                    <div className='nav-links-container flex space-between align-center'>
                        <NavLink exact activeClassName="active" to="/"><img src={homeImg} /></NavLink>
                        {/* <NavLink to="/about">About</NavLink> */}
                        <NavLink to="/contact"><img src={contactImg} /></NavLink>
                        <NavLink to="/stats"><img src={statsImg} /></NavLink>
                        <NavLink to="/signup"><img src={signupImg} /></NavLink>
                    </div>
                </nav>
            </>
        )
    }
}

export const AppHeader = withRouter(_AppHeader)

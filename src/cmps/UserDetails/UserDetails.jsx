
import React, { Component } from 'react'

import './UserDetails.scss'

export function UserDetails({ user, coinRate }) {

    return <div className="user-container">
        <h2 className='text-center'>Hello {user.name}</h2>
        <img src={'https://robohash.org/' + user.name + '/?set=set5'} alt='' className='text-center' />
        <div className='user-details-container flex column space-between '>
            <p className='text-center'>Coins Available: {user.coins}</p>
            <p className='text-center'>BitCoin Rate to USD: {coinRate}</p>
        </div>
    </div>



}



import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { userService } from '../../services/UserService'
import { bitCoinService } from '../../services/BitcoinService'
import { MovesList } from '../../cmps/MovesList/MovesList'
import './HomePage.scss'
import { UserDetails } from '../../cmps/UserDetails/UserDetails'
import heroImg from '../../assets/img/hero.svg'
import {loadUser} from '../../store/actions/userActions'
export default class HomePage extends React.Component {
    state = {
        user: null,
        coinRate: null
    }

    // const user = useSelector(state => state.userReducer.user)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(loadUser())
    // })
    componentDidMount() {
        this.loadUser()
        this.loadCoinRate()
    }
    async loadUser() {
        const user = await userService.getUser()
        this.setState({ user })
    }
    async loadCoinRate() {
        const coinRate = await bitCoinService.getRate()
        this.setState({ coinRate })
    }
    get lastUserMoves() {
        return this.state.user.moves.slice(0, 3)
    }

    render() {
        const { user } = this.state
        const { coinRate } = this.state
        if (!user || !coinRate) return <div>Is Loading</div>
        return <div className='home-page-main'>

            <div className='home-page-main flex column'>

                <div className='home-page-hero flex space-between align-center'>
                    <img src={heroImg} />
                </div>
                <div className='home-page-title-box '>
                    <h2>Welcome To Mr. BitCoin</h2>
                    <p>The World's Leading Authority On All Things BitCoin</p>
                </div>
            </div>

            <div className="home-page-container flex space-evenly ">
                {/* <div className="user-container">
                <h2 className='text-center'>Hello {user.name}</h2>
                <img src={'https://robohash.org/' + user.name + '/?set=set5'} alt='' />
                <p className='text-center'>Coins: {user.coins}</p>
                <p className='text-center'>BitCoin Rate: {coinRate}</p>
            </div> */}
                <UserDetails user={user} coinRate={coinRate} />
                <MovesList moves={this.lastUserMoves} title={'Recent Transactions'}></MovesList>
            </div>
        </div>


    }
}



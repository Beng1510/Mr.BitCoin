
import React, { Component } from 'react'
import { bitCoinService } from '../../services/BitcoinService';
import Chart from '../../cmps/Chart/Chart';

import './StatisticPage.scss'

export class StatisticPage extends Component {
    state = {
        marketPriceData: null,
        confirmedTransactionsData: null,
    }
    componentDidMount() {
        this.getMarketPrice()
        this.getConfirmedTransactions()
    }
    async getMarketPrice() {
        const marketPriceData = await bitCoinService.getMarketPrice()
        this.setState({ marketPriceData })
    }
    async getConfirmedTransactions() {
        const confirmedTransactionsData = await bitCoinService.getConfirmedTransactions()
        this.setState({ confirmedTransactionsData })
    }

    render() {
        const { marketPriceData, confirmedTransactionsData } = this.state
        return (
            <div className={ 'statistic-page' }>
                <span>
                    <h2>Market Price</h2>
                    <h3>Average USD market price across major bitcoin exchanges.</h3>
                    { marketPriceData && <Chart data={ marketPriceData } /> }
                </span>
                <span>
                    <h2>Confirmed Transactions Over The Last Two Months</h2>
                    <h3>The number of daily confirmed Bitcoin transactions.</h3>
                    { confirmedTransactionsData && <Chart data={ confirmedTransactionsData } /> }
                </span>
            </div>
        )
    }
}


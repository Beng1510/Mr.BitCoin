import axios from 'axios'

export const bitCoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions

}


async function getRate(coins) {
    const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
    return res.data
}

async function getMarketPrice() {
    try {
        console.log('ARRIVED')
        const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=2months&format=json&cors=true`)
        const data =  res.data.values.map(val => val.y)
        console.log(data)
        return data
    }
    catch {
        console.log('Error!')
    }
    }
    
    async function getConfirmedTransactions() {
        try {
            const res = await axios.get(`https://api.blockchain.info/charts/n-transactions?timespan=2months&format=json&cors=true`)
            const data =  res.data.values.map(val => val.y)
            console.log(data)
            return data
        }
        catch {
            console.log('Error!')
        }
    }
    

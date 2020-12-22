
import React, { Component } from 'react'
import { userService } from '../../services/UserService.js'
import './TransferFund.scss'

export class TransferFund extends Component {
    state = {
        user: null,
        amount: 0
    }
    componentDidMount() {
        console.log('props', this.props);
        this.loadUser()
        // this.loadContact()
    }
    async loadUser() {
        const user = await userService.getUser()
        console.log("🚀 ~ file: TransferFund.jsx ~ line 18 ~ TransferFund ~ loadUser ~ user", user)
        this.setState({ user })
    }
    // loadContact() {
    //     const contact = this.props.contact
    //     this.setState({ contact })
    // }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        // this.setState(prevState => ({ amount: { ...prevState.amount, [field]: value } }))
        this.setState({ amount: value })

    }
    render() {
        // const { contact, user, amount } = this.state
        const {contact, onTransferCoins} = this.props
        const { user, amount } = this.state
        if (!contact || !user) return <div>Is Loading</div>
        return (
            <div>
                <h2>Transfer coins to {contact.name}:</h2>
                <h2>Transfer coins from {user.name}:</h2>
                <form className='transfer-funds' onSubmit={()=>onTransferCoins(amount)}>

                    <label>Amount</label>
                    <input type="number" name="amount" value={this.amount} onChange={this.handleChange} />
                    <button>Transfer</button>
                </form>
            </div>
        )
    }
}


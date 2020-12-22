
import React, { Component } from 'react'
import { contactService } from '../../services/ContactService'
import { Link } from 'react-router-dom'
import { TransferFund } from '../../cmps/TransferFund/TransferFund'
import { MovesList } from '../../cmps/MovesList/MovesList'
import { userService } from '../../services/UserService.js'
import './ContactDetailsPage.scss'

class ContactDetailsPage extends Component {
    state = {
        contact: null,
        moves: null,
        amount: 0,
        user: null
    }
    async componentDidMount() {
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({ contact })
        const user = await userService.getUser()
        this.setState({ user })
        // this.loadUser()
        this.loadMoves()
        console.log('state', this.state);
    }
    async loadUser() {
        const user = await userService.getUser()
        this.setState({ user })
        // console.log('state',this.state);
        // console.log('coins',this.state.user.coins);
    }
    async loadMoves() {
        const moves = await userService.getMoves()
        this.setState({ moves })
    }
    onTransferCoins = async (amount) => {
        await userService.addMove(this.state.contact, amount)
    }

    render() {
        const { contact, moves, user } = this.state
        if (!contact || !user) return <div>Is Loading</div>
        return <div className='contact-details'>
            <Link to="/contact">Back</Link>
            <Link to={'./contact/edit/' + contact._id} > Edit</Link>
            <img src={"https://robohash.org/" + contact._id + '/?set=set5'} alt="" />
            <h2>{contact.name}</h2>
            <h4>{contact.phone}</h4>
            <p>{contact.email}</p>
            <TransferFund contact={contact} onTransferCoins={this.onTransferCoins} maxCoins={user.coins} ></TransferFund>
            {moves && <MovesList moves={moves} title={'Your Moves'} />}


        </div>
    }
}

export default ContactDetailsPage


import React, { Component } from 'react'
import { contactService } from '../../services/ContactService.js'
import './ContactEdit.scss'

export class ContactEdit extends Component {
    elInput = React.createRef();
    state = {
        contact: {
            name: '',
            phone: '',
            email: ''
        },
        errMsg: ''
    }
    async componentDidMount() {

        const { id } = this.props.match.params
        const contact = id ? await contactService.getContactById(id) : await contactService.getEmptyContact()
        if (contact) this.setState({ contact })
        else this.setState({ errMsg: 'Contact Not Found!' })
        this.elInput.current.focus()
        this.elInput.current.select()
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }
    onSaveContact = async (ev) => {
        ev.preventDefault()
        console.log(this.state.contact);

        await contactService.saveContact({ ...this.state.contact })
        this.props.history.push('/contact')
    }
    render() {
const {name, phone,email} = this.state.contact
return (
    <form className='contact-edit' onSubmit={this.onSaveContact} >
          <label>Name</label>
                <input autoFocus type="text" ref={ this.elInput } name="name" value={ name } onChange={ this.handleChange } />
                <label>Phone</label>
                <input type="text" name="phone" value={ phone } onChange={ this.handleChange } />
                <label>Email</label>
                <input type="text" name="email" value={ email } onChange={ this.handleChange } />
                <button>Save</button>
                <span>{ this.state.errMsg }</span>
    </form>
)
    }
}


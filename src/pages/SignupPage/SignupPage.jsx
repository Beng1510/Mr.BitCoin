
import React, { Component } from 'react'
import { userService } from '../../services/UserService.js'
import './SignupPage.scss'

export class SignupPage extends Component {
    elInput = React.createRef();
    state = {
        user: {
            name: ''
        }
    }
    async componentDidMount() {

        // const user = await userService.getEmptyContact()
        // if (contact) this.setState({ contact })
        // else this.setState({ errMsg: 'Contact Not Found!' })
        this.elInput.current.focus()
        this.elInput.current.select()
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ user: { ...prevState.user, [field]: value } }))
    }
    onSaveUser = (ev) => {
        ev.preventDefault()
        console.log(this.state.user);

        userService.signup({ ...this.state.user })
        // this.props.history.push('/contact')
    }
    render() {
        const { name } = this.state.user
        return (
            <form className='signup-form' onSubmit={this.onSaveUser} >
                <label>Name</label>
                <input autoFocus type="text" ref={this.elInput} name="name" value={name} onChange={this.handleChange} />
                <button>Save</button>
                {/* <span>{ this.state.errMsg }</span> */}
            </form>
        )
    }
}


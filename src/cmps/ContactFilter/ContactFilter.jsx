
import React, { Component } from 'react'

import './ContactFilter.scss'

export class ContactFilter extends Component {
state = {
    term: ''

}
onChangeHandler = (ev) => {
    // const field = ev.target.name
    const value = ev.target.type === "number" ? +ev.target.value : ev.target.value
    


    // const value = ev.target.type === "number" ? +ev.target.value : ev.target.value

    this.setState({ term: ev.target.value }, () => {
        // console.log(this.state);
        this.props.onSetFilter({ ...this.state })
    })
}

    render() {
        const { term } = this.state
        return <form className="contact-filter">
            <label htmlFor="">Find Who You Want</label>
            <input name="term" value={ term } type="text" onChange={ this.onChangeHandler } />
           
            {/* <label htmlFor="">Phone Number</label>
            <input name="phone" value={ phone } type="text" onChange={ this.onChangeHandler } /> */}
            
        </form>
    }
}


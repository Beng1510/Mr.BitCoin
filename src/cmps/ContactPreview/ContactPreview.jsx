
import React from 'react'
import { Link } from 'react-router-dom'

import './ContactPreview.scss'
export function ContactPreview({ contact }) {

    // function selectContact(ev) {

    //     ev.stopPropagation()
    //     onSelectContact(contact._id)

    // }

    return (
        <Link to={`/contact/${contact._id}`}>
            <li className='contact-preview'>
                <img src={'https://robohash.org/' + contact._id + '/?set=set5'} alt='' />
                <p className='text-center'>{contact.name}</p>
            </li>
        </Link>
    )
}







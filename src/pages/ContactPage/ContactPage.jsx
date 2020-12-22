
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';import { connect } from 'react-redux';

import { Link } from 'react-router-dom'

import { contactService } from '../../services/ContactService'
import { ContactList } from '../../cmps/ContactList/ContactList'
import { ContactFilter } from '../../cmps/ContactFilter/ContactFilter'
// import ContactDetailsPage from '../ContactDetailsPage/ContactDetailsPage'
import {loadContacts} from '../../store/actions/contactActions'
import './ContactPage.scss'


export function ContactPage(props) {
    // state = {
    //     contacts: null,
    //     // selectedContactId: null,
    //     filterBy: null,
    // }
    const [filterBy, setFilterBy] = useState(null)
    const contacts = useSelector(state => state.contactReducer.contacts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadContacts(filterBy))
      }, [filterBy])
    
    
      const onSetFilter = (filterBy) => {
        setFilterBy(filterBy)
      }
    // componentDidMount() {
    //     console.log('props', this.props);
    //     this.props.loadContacts(this.state.filterBy)
    // }
    // async loadContacts() {
    //     const contacts = await contactService.getContacts(this.state.filterBy)
    //     this.setState({ contacts })
    // }
    // onSelectContact = (selectedContactId) => {
    //     this.setState({ selectedContactId })
    // }
    // onSetFilter = (filterBy) => {
    //     console.log('Filter Happend!', filterBy);
    //     this.setState({ filterBy }, () => this.props.loadContacts(filterBy))
    // }

  
        return (
            <div className="contact-page">
                <ContactFilter {...props} onSetFilter={onSetFilter} />
                <Link to={'/contact/edit'}>Add New Contact</Link>
                <h2>Contact List</h2>
                {contacts && <ContactList contacts={contacts} />}
            </div>
        )
    
}

// function mapStateToProps(state) {
//     return {
//       contacts: state.contactReducer.contacts
//       // If we want to filter the robots first "like computed" but not really
//       // robots: getRobotsForDisplay(state.robotReducer.robots)
//     }
//   }
//   const mapDispatchToProps = {
//     loadContacts
//   }
//   export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)

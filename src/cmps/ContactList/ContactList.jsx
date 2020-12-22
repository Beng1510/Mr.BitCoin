
import { ContactPreview } from '../ContactPreview/ContactPreview'
import './ContactList.scss'

export function ContactList({ contacts }) {

    return (
        <ul className='contact-list'>
            {
                contacts.map(contact => <ContactPreview contact={contact} key={contact._id} />)
            }
        </ul>
    )
}



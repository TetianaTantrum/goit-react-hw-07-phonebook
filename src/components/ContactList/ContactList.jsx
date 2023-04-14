import React from 'react';
// import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import { ContactListUl, Contact, Text } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContactListUl>
      <Text>Contacts found: {visibleContacts.length}</Text>
      {visibleContacts.map(contact => (
        <Contact key={contact.id}>
          <ContactListItem contact={contact} />
        </Contact>
      ))}
    </ContactListUl>
  );
};
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
export default ContactList;

import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import { Wrapper, Button, Item } from './ContactListItem.styled';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Item>
        {contact.name}: {contact.number}
      </Item>
      <Button type="submit" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </Button>
    </Wrapper>
  );
};
ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContactListItem;

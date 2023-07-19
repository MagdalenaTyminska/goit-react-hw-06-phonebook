import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleDelete = evt => {
    const deletingContactId = evt.target.id;
    dispatch(removeContact(deletingContactId));
  };

  useEffect(() => {
    const contactsStringified = JSON.stringify(contacts);
    window.localStorage.setItem('contacts', contactsStringified);
  }, [contacts]);

  return (
    <>
      <ul className={css.list}>
        {contacts
          .filter(contact => {
            if (!filter) {
              return true;
            }
            const lowerName = contact.name.toLowerCase();
            const lowerFilter = filter.toLowerCase();
            return lowerName.includes(lowerFilter);
          })
          .map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button
                className={css.contactListButton}
                id={contact.id}
                type="button"
                onClick={handleDelete}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;

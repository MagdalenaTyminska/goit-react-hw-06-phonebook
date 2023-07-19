import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ filter, contacts, handleRemove }) => {
  const handleDeleteClick = event => {
    const { id } = event.target;
    handleRemove(id);
  };

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
                onClick={handleDeleteClick}
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

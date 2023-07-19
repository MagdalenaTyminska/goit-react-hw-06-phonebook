import React from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <form className={css.contactFormTable} onSubmit={handleSubmit}>
      <label className={css.contactFormLabel}>name</label>
      <input
        className={css.contactFormInput}
        label="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
      <label className={css.contactFormLabel}>number</label>
      <input
        className={css.contactFormInput}
        label="number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        required
      />

      <button type="submit" className={css.contactFormButton}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

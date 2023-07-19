import React, { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ event, name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={css.contactFormTable} onSubmit={handleSubmit}>
      <label className={css.contactFormLabel}>name</label>
      <input
        onChange={handleChange}
        className={css.contactFormInput}
        label="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
      <label className={css.contactFormLabel}>number</label>
      <input
        onChange={handleChange}
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

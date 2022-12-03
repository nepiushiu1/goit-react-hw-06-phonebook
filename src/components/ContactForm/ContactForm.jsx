import css from './ContactForm.module.css';

import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const ContactForm = ({ contacts }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmitForm = event => {
    event.preventDefault();
    if (contacts.filter(e => e.name === name).length === 0) {
      dispatch(addContact(nanoid(), name, number));
      setName('');
      setNumber('');
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const onInputChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(() => {
        return value;
      });
    } else {
      setNumber(() => {
        return value;
      });
    }
  };

  return (
    <form onSubmit={onSubmitForm} className={css.form}>
      <p className={css.name}>Name</p>
      <input
        className={css.input}
        type="text"
        name="name"
        value={name}
        onChange={onInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <p className={css.name}>Number</p>
      <input
        className={css.input}
        type="tel"
        name="number"
        onChange={onInputChange}
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />{' '}
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

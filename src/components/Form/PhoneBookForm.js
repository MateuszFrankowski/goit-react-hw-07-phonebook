import css from './PhoneBookForm.module.css';
import { getFilter } from 'redux/Selectors';
import { addContact } from 'MockStorageHandlers/MockStorageHandlers';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/Selectors';
import { nanoid } from 'nanoid';
import React from 'react';
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const nameInputId = nanoid();
  const telInputId = nanoid();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { name, number } = form.elements;
    if (contacts) {
      if (contacts.find(element => element.name === name.value)) {
        return alert(name.value + ' is already in contacts');
      }
    }
    dispatch(addContact({ name: name.value, number: number.value }));
    form.reset();
    const input = document.getElementsByName('filter');
    input.value = filter;
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit} className={css.form} style={{}}>
        <label htmlFor={nameInputId}>Name</label>
        <input
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={telInputId}>Number</label>
        <input
          id={telInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

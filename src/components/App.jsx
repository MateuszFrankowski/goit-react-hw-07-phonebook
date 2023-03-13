import { ContactForm } from './Form/PhoneBookForm';
import { ContactsList } from './Contacts/ContactList';
import { Filter } from './Filter/Filter';
import { loadFromMockStorage } from 'MockStorageHandlers/MockStorageHandlers';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const phoneBookContacts = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(loadFromMockStorage());
  }, [dispatch]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: ' whitesmoke',
      }}
    >
      <ContactForm />
      {!!phoneBookContacts > 0 && (
        <div>
          <Filter />
          <ContactsList />
        </div>
      )}
    </div>
  );
};

import { ContactForm } from './Form/PhoneBookForm';
import { ContactsList } from './Contacts/ContactList';
import { Filter } from './Filter/Filter';
import { loadContacts } from 'MockStorageHandlers/MockStorageHandlers';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getError, getIsLoading, getContacts } from 'redux/Selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(loadContacts());
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
      {isLoading && !error && <b>Request in progress...</b>}
      {!isLoading && !error && contacts && (
        <div>
          <Filter />
          <ContactsList />
        </div>
      )}
    </div>
  );
};

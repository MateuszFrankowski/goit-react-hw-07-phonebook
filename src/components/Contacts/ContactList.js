import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { deleteContactAction } from 'redux/Actions';
import { deleteContactAction } from 'redux/ContactsSlice';
export const ContactsList = () => {
  const dispatch = useDispatch();
  const filt = useSelector(state => state.filter);
  console.log('filt', filt);
  const phoneBookContacts = useSelector(state => state.contacts);
  const phoneContacts = !!filt
    ? phoneBookContacts.filter(contact =>
        contact.name.toLowerCase().includes(filt.toLowerCase())
      )
    : phoneBookContacts;
  const handleDeleteContact = id => dispatch(deleteContactAction(id));
  return (
    <>
      <h2 className={css['contacts-title']}>Contacts</h2>
      <ul className={css['contacts-list']}>
        {phoneContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <p className={css.name}>{contact.name}</p>
            <p className={css.number}>{contact.number}</p>
            <button
              className={css.button}
              id={contact.name}
              onClick={() => handleDeleteContact(contact.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

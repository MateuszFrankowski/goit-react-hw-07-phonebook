import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/Selectors';
import { deleteContact } from 'MockStorageHandlers/MockStorageHandlers';
export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleDelete = id => dispatch(deleteContact(id));
  const filt = useSelector(state => state.filter);

  const phoneContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filt.toLowerCase())
  );

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
              onClick={() => handleDelete(contact.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

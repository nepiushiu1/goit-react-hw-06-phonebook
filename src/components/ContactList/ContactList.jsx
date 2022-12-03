import css from './ContactList.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <ol className={css.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={css.link}>
          {name} : {number}
          <button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            className={css.btn}
          >
            delete
          </button>
        </li>
      ))}
    </ol>
  );
};

import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import css from './EditContact.module.scss';

// import { itemsListStore } from 'redux/contacts/contacts-items/contacts-items-selector';
import { renameContact } from 'redux/contacts/contacts-items/contacts-items-operations';
function EditContact({ contact, onClose }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  // const arrItems = useSelector(itemsListStore);

  const changeInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    // if (arrItems.find(el => el.name === name || el.number === number)) {
    //   Notiflix.Report.warning(
    //     `Warning`,
    //     `${name} or ${number} is already in cotacts`,
    //     'Okay'
    //   );

    //   return;
    // }
    if (name !== contact.name) {
      Notiflix.Notify.success(
        `Changet contact name ${contact.name} to ${name}`
      );
    }
    if (number !== contact.number) {
      Notiflix.Notify.success(
        `Changet contact ${contact.name} number to ${number}`
      );
    }
    const newContactValue = {
      id: contact.id,
      user: { name, number },
    };
    dispatch(renameContact(newContactValue));
    onClose();
  };
  return (
    <div>
      <ul>
        <li className={css.edit_item}>
          <span className={css.edit_itemStyle}>name:</span> {contact.name}
        </li>
        <li className={css.edit_item}>
          <span className={css.edit_itemStyle}>number: </span> {contact.number}
        </li>
      </ul>
      <form onSubmit={onSubmit} className={css.edit_form}>
        <label>
          <input
            className={css.edit_input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Alice Cooper"
            value={name}
            onChange={changeInput}
          />
        </label>
        <label>
          <input
            className={css.edit_input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="+38-0__-__-__-__"
            value={number}
            onChange={changeInput}
          />
        </label>
        <div>
          <button type="submit" className={css.edit_btnEdit}>
            Edit
          </button>
          <button type="button" className={css.edit_btnClose} onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

EditContact.propTypes = {
  onClose: PropTypes.func,
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default EditContact;

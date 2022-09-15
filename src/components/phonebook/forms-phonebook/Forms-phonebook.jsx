import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import css from './Forms-phonebook.module.scss';

import { postContact } from 'redux/contacts/contacts-items/contacts-items-operations';
import { itemsListStore } from 'redux/contacts/contacts-items/contacts-items-selector';

function FormsPhonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const arrItems = useSelector(itemsListStore);

  const chngeInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (arrItems.find(el => el.name === name || el.number === number)) {
      Notiflix.Report.warning(
        `Warning`,
        `${name} or ${number} is already in cotacts`,
        'Okay'
      );
      reset();
      return;
    }
    Notiflix.Notify.success(`Added contact, ${name}`);
    dispatch(postContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={onSubmit} className={css.phoneBook_form}>
      <label>
        <input
          className={css.phoneBook_input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Alice Cooper"
          value={name}
          onChange={chngeInput}
        />
      </label>
      <label>
        <input
          className={css.phoneBook_input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="+38-0__-__-__-__"
          value={number}
          onChange={chngeInput}
        />
      </label>
      <button type="submit" className={css.phoneBook_btn}>
        Add contact
      </button>
    </form>
  );
}

export default FormsPhonebook;

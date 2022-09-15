import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import css from './Contacts.module.scss';

import FormsPhonebook from 'components/phonebook/forms-phonebook/Forms-phonebook';
import FilterPhonebook from 'components/phonebook/filter-phonebook/Filter-phonebook';
import Loading from 'components/loading/Loading';
import ListPhonebook from 'components/phonebook/list-phonebook/List-phonebook';

import { getContacts } from 'redux/contacts/contacts-items/contacts-items-operations';
import { itemsIsLoadingStore } from 'redux/contacts/contacts-items/contacts-items-selector';

function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(itemsIsLoadingStore);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={css.contacts_block}>
      <h2 className={css.contacts_title}>Contacts</h2>
      <FormsPhonebook />
      <h2 className={css.contacts_title}>Fiter contacts</h2>
      <FilterPhonebook />
      {isLoading ? <Loading /> : <ListPhonebook />}
    </div>
  );
}

export default Contacts;

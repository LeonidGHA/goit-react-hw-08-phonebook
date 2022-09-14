import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

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
    <>
      <h2>Phonebook</h2>
      <FormsPhonebook />
      <h2>Contacts</h2>
      <FilterPhonebook />
      {isLoading ? <Loading /> : <ListPhonebook />}
    </>
  );
}

export default Contacts;

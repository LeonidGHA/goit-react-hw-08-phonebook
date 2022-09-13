import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import FormsPhonebook from 'components/phonebook/forms-phonebook/Forms-phonebook';
import FilterPhonebook from 'components/phonebook/filter-phonebook/Filter-phonebook';
import Loading from 'components/loading/Loading';
import ListPhonebook from 'components/phonebook/list-phonebook/List-phonebook';

import { getContacts } from 'redux/contacts/contacts-items/contacts-items-operations';
function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <>
      <h2>Phonebook</h2>
      <FormsPhonebook />
      <h2>Contacts</h2>
      <FilterPhonebook />
      <Loading />
      <ListPhonebook />
    </>
  );
}

export default Contacts;

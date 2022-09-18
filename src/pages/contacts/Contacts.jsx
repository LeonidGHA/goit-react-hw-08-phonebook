import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import css from './Contacts.module.scss';

import FormsPhonebook from 'components/phonebook/forms-phonebook/Forms-phonebook';
import FilterPhonebook from 'components/phonebook/filter-phonebook/Filter-phonebook';
import Loading from 'components/loading/Loading';
import ListPhonebook from 'components/phonebook/list-phonebook/List-phonebook';
import Modal from 'shared/modal/Modal';
import EditContact from 'components/edit-contact/EditContact';

import { getContacts } from 'redux/contacts/contacts-items/contacts-items-operations';
import {
  itemsIsLoadingStore,
  itemsListStore,
} from 'redux/contacts/contacts-items/contacts-items-selector';

function Contacts() {
  const [modalOpen, setModalOpen] = useState(false);
  const [contact, setContact] = useState({});
  const dispatch = useDispatch();
  const isLoading = useSelector(itemsIsLoadingStore);
  const contactsList = useSelector(itemsListStore);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const contactRenderModal = ({ target }) => {
    toggleModal();
    const contact = contactsList.find(el => el.id === target.id);
    setContact(contact);
  };

  return (
    <div className={css.contacts_block}>
      {modalOpen && (
        <Modal onClick={toggleModal}>
          <EditContact contact={contact} onClose={toggleModal} />
        </Modal>
      )}

      <h2 className={css.contacts_title}>Phonebook</h2>
      <FormsPhonebook />
      <h2 className={css.contacts_title}>Fiter contacts</h2>
      <FilterPhonebook />
      {isLoading ? <Loading /> : <ListPhonebook onClick={contactRenderModal} />}
    </div>
  );
}

export default Contacts;

import { useDispatch, useSelector } from 'react-redux';

import css from './List-phonebook.module.scss';

import { filterPhonebookStore } from '../../../redux/contacts/contacts-filter/contacts-filter-selector';
import { itemsListStore } from '../../../redux/contacts/contacts-items/contacts-items-selector';
import { deleteContact } from 'redux/contacts/contacts-items/contacts-items-operations';
function ListPhonebook() {
  const itemsStore = useSelector(itemsListStore);
  const filterValueStore = useSelector(filterPhonebookStore);
  const dispatch = useDispatch();

  const filteredItems = itemsStore?.filter(el =>
    el.name.toLowerCase().includes(filterValueStore.toLowerCase())
  );
  const renderFilteredItems = filteredItems?.map(({ id, name, number }) => (
    <li key={id} className={css.notFound_text}>
      {name} : {number}
      <button
        type="button"
        onClick={e => dispatch(deleteContact(e.target.id))}
        id={id}
        className={css.notFound_btn}
      >
        X
      </button>
    </li>
  ));
  return <ul className={css.notFound_list}>{renderFilteredItems}</ul>;
}

export default ListPhonebook;

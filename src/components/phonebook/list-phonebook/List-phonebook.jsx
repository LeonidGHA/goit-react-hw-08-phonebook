import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import css from './List-phonebook.module.scss';

import { filterPhonebookStore } from '../../../redux/contacts/contacts-filter/contacts-filter-selector';
import { itemsListStore } from '../../../redux/contacts/contacts-items/contacts-items-selector';
import { deleteContact } from 'redux/contacts/contacts-items/contacts-items-operations';

function ListPhonebook({ onClick }) {
  const itemsStore = useSelector(itemsListStore);
  const filterValueStore = useSelector(filterPhonebookStore);
  const dispatch = useDispatch();
  // console.log(onClick);

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
      <button
        type="button"
        onClick={onClick}
        id={id}
        className={css.notFound_btn}
      >
        Edit
      </button>
    </li>
  ));
  return <ul className={css.notFound_list}>{renderFilteredItems}</ul>;
}

ListPhonebook.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ListPhonebook;

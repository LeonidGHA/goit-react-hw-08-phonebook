import { useDispatch, useSelector } from 'react-redux';

import { getValue } from '../../../redux/contacts/contacts-filter/contacts-filter-slise';
import { filterPhonebookStore } from '../../../redux/contacts/contacts-filter/contacts-filter-selector';
function FilterPhonebook() {
  const dispatch = useDispatch();
  const filterValue = useSelector(filterPhonebookStore);
  return (
    <input
      type="text"
      //   className={css.input}
      name="filter"
      placeholder="Serch Contacts"
      value={filterValue}
      onChange={e => dispatch(getValue(e.target.value))}
    />
  );
}
export default FilterPhonebook;

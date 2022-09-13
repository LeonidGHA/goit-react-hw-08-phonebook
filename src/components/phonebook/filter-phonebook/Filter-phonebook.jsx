import { useDispatch } from 'react-redux';

import { getValue } from '../../../redux/contacts/contacts-filter/contacts-filter-slise';

function FilterPhonebook() {
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      //   className={css.input}
      name="filter"
      placeholder="Serch Contacts"
      //   value={filterValue}
      onChange={e => dispatch(getValue(e.target.value))}
    />
  );
}
export default FilterPhonebook;

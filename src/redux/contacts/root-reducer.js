import { combineReducers } from 'redux';

import itemsSlise from './contacts-items/contacts-items-slice';
import filter from './contacts-filter/contacts-filter-slise';

export default combineReducers({ items: itemsSlise, filter });

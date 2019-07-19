import { combineReducers } from 'redux';
import elements from './elements';
import favoriteList from './favoriteList';
import filter from './filter';

export const reducer = combineReducers({
  elements,
  favoriteList,
  filter
});
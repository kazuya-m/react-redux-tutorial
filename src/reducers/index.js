import {combineReducers } from 'redux';
import count from './count';
import getname from './getname'
export default combineReducers({ count, getname })
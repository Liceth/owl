// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import { feed } from './feed_reducer';

 export default combineReducers({
   feed
 });
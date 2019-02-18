import { feedConstants } from '../constants/feed_constants';

const initialState =  {
  feedList:[],
};

export function feed(state = initialState, action) {

  switch (action.type) {  
    case feedConstants.LIST_FEED_REQUEST:
      return {
        ...state
      };
    case feedConstants.LIST_FEED_SUCCESS:
      return {
        ...state,  
        feedList: action.data
      };
    case feedConstants.LIST_FEED_FAILURE:
      return {
        ...state,
        ...initialState
      };
    default:
      return state
  }
}
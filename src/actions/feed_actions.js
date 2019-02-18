import { feedConstants } from '../constants/feed_constants';
import { feedService } from '../services/feed_service';
import { alertActions } from './alert_actions';

function request(data) { return { type: feedConstants.LIST_FEED_REQUEST, data } }
function success(data) { return { type: feedConstants.LIST_FEED_SUCCESS, data } }
function failure(error) { return { type: feedConstants.LIST_FEED_FAILURE, error } }

export const feedActions = {
  fetchFeed
};

export function fetchFeed() {
return dispatch => {
    dispatch(request());

    return feedService.getFeed()
        .then(
            data => { 
                dispatch(success(data));
                console.log(data);
                // reload page with list of owls
            },
            error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
        );
};
}
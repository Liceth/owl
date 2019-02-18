import ConfigPage from './ConfigPage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFeed} from '../../../actions/feed_actions';

function mapStateToProps(state) {
  const { feedList } = state.feed;
  return {
    feedList
  };
}

function mapDispatchToProps(dispatch){
  return{
    fetchFeed: bindActionCreators(fetchFeed,dispatch)
  };
}
export default connect (mapStateToProps, mapDispatchToProps) (ConfigPage);
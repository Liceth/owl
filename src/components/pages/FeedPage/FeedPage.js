import React from 'react';
import {} from '../../../assets/styles/FeedPage.css';
import PropTypes from 'prop-types';
import { history } from '../../../helpers/history';

const logo = require('../../../assets/images/Logo.jpeg');
const heart = require('../../../assets/icons/heart.png');
const settings = require('../../../assets/icons/settings.png')

export default class FeedPage extends React.Component {
  constructor (props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchFeed();
  }

  handleSettings(e) {
    e.preventDefault();
    history.push('/settings'); 
  }

  render(){
    let { feedList } = this.props;
    if(!feedList){ return null}
  return(
    <div>
      <div className="feedBody">
        <hgroup><img src={logo} width="120" height="60"/></hgroup>
        <div className="options">
          <p>OWLs</p>
          <img 
            src={settings} 
            width="30" 
            height="30" 
            style={{padding:'5px 25px 5px 5px', float:"right"}}
            onClick={this.handleSettings}/>
        </div>
        <div className="form">
        { feedList.map(feedElem =>{
          var newDate = new Date(feedElem.created_at);
          return(
            <div className="form-body" key={feedElem.id}>
              <p className="author">{feedElem.user.name}</p>
              <p className="date">{newDate.toLocaleString()}</p>
              <div className="wrap-description">
                <p className="description">{feedElem.text}</p>
              </div>
            </div>
          )
        })}
    </div>
        <div className="powered_">
          Made with <img alt="" src={heart} width="16" height="16" />
          <a href="https://about.me/licethovalles"> By Lilo </a>
        </div>
      </div>
    </div>
  )}
}
FeedPage.propTypes = {
  fetchFeed: PropTypes.func.isRequired,
  //feedList:PropTypes.ArrayList.isRequired,
 // author: PropTypes.string.isRequired
};
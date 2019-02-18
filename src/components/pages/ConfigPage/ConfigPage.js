import React from 'react';
import {} from '../../../assets/styles/ConfigPage.css';
import { history } from '../../../helpers/history';
import PropTypes from 'prop-types';

const logo = require('../../../assets/images/Logo.jpeg');
const heart = require('../../../assets/icons/heart.png');
const back = require('../../../assets/icons/back.png');

export default class ConfigPage extends React.Component {
  constructor (props){
    super(props);
    this.state={
      feed_url:'',
      number_post:'',
      intervals:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleApply = this.handleApply.bind(this);
  }

  handleBack(e) {
    e.preventDefault();
    history.push('/'); 
  } 

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleApply(e) {
    e.preventDefault();

    this.setState({
      feed_url: '',
      number_post:'',
      intervals:''
    });
  }
  
  componentDidMount() {
    this.props.fetchFeed();
  }

  render(){
    const { feed_url, number_post, intervals } = this.state;
    let { feedList} = this.props;
    let feed_number_post,post_by_url, feed_intervals;

    if(!feedList){ return null}

    feed_number_post = feedList.filter((elem,idx) => idx <number_post)
    //post_by_url =feedList.filter((elem,x) => x.urls.url==feed_url)
    //console.log(post_by_url);
    return(
      <div>
        <div className="configForm">
        <hgroup>
            <img src={logo} width="120" height="60"/>
          </hgroup>
          <div className="options">
            <img 
              src={back} 
              className="options_img"
              onClick={this.handleBack}/>
            <p>Configuration Options</p>
          </div>
          <form name="form" onSubmit={this.handleApply}>
          <div className="group">
            <input 
              name ="feed_url"
              type="text"
              className="used"
              value={this.state.feed_url}
              onChange={this.handleChange}
              />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="labels">Feed Url</label>
          </div>
          <div className="group">
            <input 
              name ="number_post"
              type="number"
              className="used"
              value={this.state.number_post}
              onChange={this.handleChange}/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="labels"># Post</label>
          </div>
          <div className="group">
            <input 
              name ="intervals"
              type="number" 
              className="used"
              value={this.state.intervals}
              onChange={this.handleChange}/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="labels">Intervals</label>
          </div>
          <button type="button" className="buttonui" onClick={this.handleApply}> <span>Apply </span></button>
          </form>

          <div className="posts">
          { feedList.map(feedElem =>{
            var newDate = new Date(feedElem.created_at);
            return(
              <div className="posts-body" key={feedElem.id}>
                <p className="author">{feedElem.user.name}</p>
                <p className="date">{newDate.toLocaleString()}</p>
                <div className="wrap-description">
                  <p className="description">{feedElem.text}</p>
                </div>
              </div>
            )
        })}
    </div>
  
          <div className="powered">
            Made with <img alt="" src={heart} width="16" height="16" />
            <a href="https://about.me/licethovalles"> By Lilo </a>
          </div>
        </div>
      </div>
    )}
  }

  ConfigPage.propTypes = {
    fetchFeed: PropTypes.func.isRequired,
  };
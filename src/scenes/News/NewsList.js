import React, { Component } from 'react';
import { connect } from 'react-redux';
import './news.scss';

import Card from './components/Card/Card';

class NewsList extends Component {

  render() {
    const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return (
      <div className="news container">
        <div className="row">
          {myArray.map((item) => (
            <Card key={item} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};


export default connect(
  mapStateToProps,
)(NewsList);



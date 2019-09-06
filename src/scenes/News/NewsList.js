import React from 'react';
import uuidv4 from 'uuid/v4';

import { connect } from 'react-redux';
import './news.scss';

import Card from './components/Card/Card';
import Spinner from './components/Spinner/Spinner';

const NewsList = ({ news: { articles } }) => {
  console.log(articles)
  if (!articles) {
    return (
      <div className="news container">
        <div className="news--spinner">
          <Spinner />
        </div>
      </div>
    )
  }

  return (
    <div className="news container">
      <div className="row">
        {articles.map((news) => (
          <Card key={uuidv4()} news={news} />
        ))}
      </div>
    </div>
  )

}

const mapStateToProps = state => {

  return { news: state.news }
};


export default connect(
  mapStateToProps,
)(NewsList);



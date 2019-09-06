import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import Avatar from '../Avatar/Avatar'

// const getAvatar = (name) => {
//   console.log(name)
//   return name.chartAt(0)
// }

class NewsCard extends React.Component {

  render() {
    const { news: { description, title, urlToImage, publishedAt, url, source: { name } } } = this.props;

    const firstLetter = name => {
      return name.charAt(0)
    }
    return (
      <div className="card">
        <div className="card--container">
          <div className="card--header">
            <div className="card--avatar">
              <Avatar letter={firstLetter(name)} />
            </div>
            <div className="card--header--content">
              <p>{name}</p>
              <p>{publishedAt}</p>
            </div>
          </div>
          <div className="card--body">
            <div className="card--body--img">
              <img src={urlToImage} alt={title} />
            </div>
            <div className="card--body--content">
              <a href={url} target="_blank" rel="noopener noreferrer"><h3>{title}</h3></a>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

NewsCard.propTypes = {
  news: PropTypes.shape({
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    source: PropTypes.shape({ name: PropTypes.string.isRequired })
  })
};

export default NewsCard

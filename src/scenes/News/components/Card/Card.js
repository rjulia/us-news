import React from 'react';
import './Card.scss';
import Avatar from '../Avatar/Avatar'

// const getAvatar = (name) => {
//   console.log(name)
//   return name.chartAt(0)
// }

class Card extends React.Component {




  render() {
    const { news: { content, title, urlToImage, publishedAt, source: { name } } } = this.props;

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
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card

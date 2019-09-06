import React from 'react';
import './Card.scss';
import Avatar from '../Avatar/Avatar'
const Card = () => {
  return (
    <div className="card">
      <div className="card--container">
        <div className="card--header">
          <div className="card--avatar">
            <Avatar letter={'n'} />
          </div>
          <div className="card--header--content">
            <p>Gameprees</p>
            <p>2019-08-29</p>
          </div>
        </div>
        <div className="card--body">
          <div className="card--body--img">
            <img src="https://pokemongohub.net/wp-content/uploads/2018/11/Pokemon-Lets-Go-1068x546.jpg" alt="" />
          </div>
          <div className="card--body--content">
            <h3>Pokemon masters Available for Androi and Ios</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, nobis porro adipisci deleniti exercitationem hic eveniet, accusamus ipsa eaque aperiam odio dolorum in error eius natus dolore eum quas et.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

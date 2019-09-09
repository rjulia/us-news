import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Button = ({ handleClick }) => {
  return (
    <div className="button--plus" onClick={handleClick}>
      <FontAwesomeIcon icon={faPlus} className="button--plus--icon" />
    </div>
  )
}

Button.propTypes = {

  handleClick: PropTypes.func.isRequired,

}

export default Button

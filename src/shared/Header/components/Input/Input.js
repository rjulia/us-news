import React from 'react';
import './Input.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Input = () => {
  return (
    <div className="search">
      <FontAwesomeIcon icon={faSearch} className="search--icon" />
      <input className="search--input" type="text" placeholder="Search" />
    </div>
  )
}

export default Input

import React from 'react';
import './SearchInput.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Input = ({ value, onChange, searching }) => {
  return (
    <div className="search">
      <FontAwesomeIcon icon={faSearch} className="search--icon" />
      <input
        className="search--input"
        type="text"
        placeholder="Search"
        onChange={e => onChange(e.target.value)} />
    </div>
  )
}

export default Input

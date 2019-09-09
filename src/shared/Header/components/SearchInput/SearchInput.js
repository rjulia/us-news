import React from 'react';
import PropTypes from 'prop-types';
import './SearchInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="search">
      <FontAwesomeIcon icon={faSearch} className="search--icon" />
      <input
        className="search--input"
        type="text"
        value={value}
        placeholder="Search"
        onChange={e => onChange(e.target.value)} />
    </div>
  )
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchInput

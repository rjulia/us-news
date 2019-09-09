import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import Input from "../components/SearchInput/SearchInput";
import { connect } from 'react-redux';
import { searchAllPosts } from '../../../pages/News/state/actions';

const Header = ({ onSearchAllPosts }) => {

  const [searchTxt, setSearchTxt] = useState('');

  useEffect(() => {
    let timeout = setTimeout(function () {
      onSearchAllPosts(searchTxt)
    }, 800)
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTxt])

  const handleSearch = (txt) => {
    setSearchTxt(txt)
  };

  return (
    <div className='header'>
      <div className="header--container">
        <div className="logo">
          <span>US News</span>
        </div>
        <Input
          value={searchTxt}
          onChange={handleSearch}
        />
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  onSearchAllPosts: query => dispatch(searchAllPosts(query)),
})

Header.propTypes = {
  onSearchAllPosts: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps
)(Header);


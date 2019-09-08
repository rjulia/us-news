import React, { useState, useEffect } from 'react';
import './Header.scss';
import Input from "../components/SearchInput/SearchInput";
import debounce from "lodash.debounce";

import { connect } from 'react-redux';

import { searchAllPosts } from '../../../pages/News/state/actions';

const Header = ({ onSearchAllPosts }) => {

  const [searchTxt, setSearchTxt] = useState('');


  useEffect(() => {
    let timeout = setTimeout(function () {
      onSearchAllPosts({
        query: searchTxt,
        numberPage: 10
      })
    }, 800)
    return () => clearTimeout(timeout);
  }, [searchTxt, onSearchAllPosts]);

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
  onSearchAllPosts: params => dispatch(searchAllPosts(params))
})

export default connect(
  null,
  mapDispatchToProps
)(Header);
;

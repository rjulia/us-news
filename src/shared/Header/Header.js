import React, { useState, useEffect } from 'react';
import './Header.scss';
import Input from "./components/Input/Input";
import debounce from "lodash.debounce";

import { connect } from 'react-redux';

import { searchAllPosts } from '../../scenes/News/state/actions';

const Header = ({ onSearchAllPosts }) => {

  const [searchTxt, setSearchTxt] = useState('new york');

  useEffect(() => {
    debounce(() => onSearchAllPosts({
      query: searchTxt,
      numberPage: 100
    }), 500)()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='header'>
      <div className="header--container">
        <div className="logo">
          <span>US News</span>
        </div>
        <Input />
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
